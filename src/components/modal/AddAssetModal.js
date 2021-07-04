const AddAssetModal = ({ onClose }) => {
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
              name="asset-name"
              id="asset-name"
              placeholder="eg. Bitcoin"
              required
            />
            <ul className="suggestions"></ul>
          </div>
          <label htmlFor="asset-price">Price (in USD)</label>
          <input
            className="modal__input"
            type="number"
            name="asset-price"
            id="asset-price"
            min="0"
            step="any"
            placeholder="eg. 30000"
            required
          />
          <label htmlFor="asset-quantity">Quantity</label>
          <input
            className="modal__input"
            type="number"
            name="asset-quantity"
            id="asset-quantity"
            min="0"
            step="any"
            placeholder="eg. 5"
            required
          />
          <button className="btn btn-green" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAssetModal;
