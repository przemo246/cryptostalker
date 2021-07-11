import { useState } from "react";
import { db } from "../../firebase.config";
import { useUser } from "../../hooks/useUser";

export const AddAssetModal = ({ onClose }) => {
  const user = useUser();
  const [values, setValues] = useState({
    id: "",
    price: "",
    holdings: "",
    notification: "",
  });
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (name === "id") {
      handleSuggestions(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, price, holdings } = values;
    if (id && price && holdings && price > 0 && holdings > 0) {
      console.log(id, +price, +holdings);
      // addAssetToDb(id, +price, +holdings);
      setValues([{ id: "", price: "", holdings: "", notification: "" }]);
    }
  };

  const handleSuggestions = (value) => {
    fetch("https://api.coingecko.com/api/v3/coins/")
      .then((data) => data.json())
      .then((res) => {
        const matches = res.filter((el) => {
          const regex = new RegExp(`^${value}`, "gi");
          return el.name.match(regex) || el.symbol.match(regex);
        });
        setSuggestions(matches);
        if (value.length === 0) {
          setSuggestions([]);
        }
      })
      .catch((err) => console.error(err.message));
  };
  const getAssetId = (e) => {
    setValues({ ...values, id: e.target.id });
    setSuggestions([]);
  };

  const addAssetToDb = ({ id, price, holdings }) => {
    return db
      .collection("assets")
      .doc(user?.uid)
      .collection("allassets")
      .add({
        timeStamp: parseInt((Date.now() + "").slice(-5)),
        id,
        price,
        holdings,
      });
  };

  return (
    <div className="modal">
      <div className="modal__close">
        <button title="Close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal__content">
        <div className="modal__heading">
          <span>+</span> Add new asset
        </div>
        <form className="modal__form">
          <label htmlFor="asset">Asset name:</label>
          <div className="modal__name">
            <input
              className="modal__input"
              type="text"
              name="id"
              placeholder="eg. Bitcoin"
              onChange={handleChange}
              value={values.id}
              required
            />
            <ul className="suggestions">
              {suggestions.map((el, i) => {
                return (
                  <li
                    className="suggestions__item"
                    key={i}
                    id={el.id}
                    onClick={getAssetId}
                  >
                    {el.name} ({el.symbol.toUpperCase()})
                  </li>
                );
              })}
            </ul>
          </div>
          <label htmlFor="asset-price">Price (in USD)</label>
          <input
            className="modal__input"
            type="number"
            name="price"
            min="0"
            step="any"
            placeholder="eg. 30000"
            value={values.price}
            onChange={handleChange}
            required
          />
          <label htmlFor="asset-holdings">Holdings</label>
          <input
            className="modal__input"
            type="number"
            name="holdings"
            min="0"
            step="any"
            placeholder="eg. 5"
            value={values.holdings}
            onChange={handleChange}
            required
          />
          <button
            className="btn btn-green"
            onClick={handleSubmit}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
