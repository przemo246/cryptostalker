import { useState } from "react";
import { db } from "../../firebase.config";
import { useUser } from "../../hooks/useUser";

const AddAssetModal = ({ onClose }) => {
  const user = useUser();
  const [values, setValues] = useState({
    assetName: "",
    assetPrice: "",
    assetQuantity: "",
    error: "",
  });
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (name === "assetName") {
      handleSuggestions(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { assetName, assetPrice, assetQuantity } = values;
    if (assetName && assetPrice && assetQuantity) {
      addAssetToDb(assetName, assetPrice, assetQuantity);
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
    setValues({ ...values, assetName: e.target.id });
    setSuggestions([]);
  };

  const addAssetToDb = ({ assetName, assetPrice, assetQuantity }) => {
    return db.collection("assets").doc(user?.uid).collection("allassets").add({
      assetName,
      assetPrice,
      assetQuantity,
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
              name="assetName"
              placeholder="eg. Bitcoin"
              onChange={handleChange}
              value={values.assetName}
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
            name="assetPrice"
            min="0"
            step="any"
            placeholder="eg. 30000"
            required
          />
          <label htmlFor="asset-quantity">Quantity</label>
          <input
            className="modal__input"
            type="number"
            name="assetQuantity"
            min="0"
            step="any"
            placeholder="eg. 5"
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

export default AddAssetModal;
