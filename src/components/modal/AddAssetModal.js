import { useState } from "react";
import { db } from "../../firebase.config";
import { useUser } from "../../hooks/useUser";
import { useGetAssetIds } from "../../hooks/useGetAssetIds";

export const AddAssetModal = () => {
  const user = useUser();
  const assetIds = useGetAssetIds();
  const [values, setValues] = useState({
    id: "",
    price: "",
    holdings: "",
    notification: "",
  });
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value, notification: "" });
    if (name === "id") {
      handleSuggestions(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, price, holdings } = values;
    if (id && price && holdings) {
      const findId = assetIds.find((obj) => obj.id === id);
      if (findId) {
        addAssetToDb(id, +price, +holdings);
        setValues({ id: "", price: "", holdings: "", notification: "" });
      } else {
        setValues({
          ...values,
          notification: "Use asset id from the dropdown list.",
        });
      }
    } else {
      setValues({
        ...values,
        notification: "Fill in all the input fields to proceed.",
      });
    }
  };

  const handleSuggestions = (value) => {
    const matches = assetIds.filter((el) => {
      const regex = new RegExp(`^${value}`, "gi");
      return el.name.match(regex) || el.symbol.match(regex);
    });
    setSuggestions(matches);
    if (value.length === 0) {
      setSuggestions([]);
    }
  };
  const getAssetId = (e) => {
    setValues({ ...values, id: e.target.id });
    setSuggestions([]);
  };

  const addAssetToDb = (id, price, holdings) => {
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
    <>
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
        <button className="btn btn-green" onClick={handleSubmit} type="submit">
          Add
        </button>
        <div className="notification">{values.notification}</div>
      </form>
    </>
  );
};
