import { useState, useEffect } from "react";
import Modal from "../modal/Modal";

const Portfolio = () => {
  const [assets, getAssets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__heading">
          <h2 className="heading-secondary">Portfolio 💰</h2>
        </div>
        <div className="features">
          <div className="features__balance">
            <span id="balance">$ 2361,49</span>Total balance
          </div>
          <div className="features__price">
            <span id="price">$ -63,39</span>24h portfolio change
          </div>
          <div className="features__profit">
            <span id="profit">$ 408,48</span>Total profit / loss
          </div>
        </div>
        <div className="add-new">
          <button className="add-new__btn" onClick={() => setIsOpen(true)}>
            + Add new
          </button>
        </div>
        <div className="assets">
          <div className="assets__headings">
            <h4>#</h4>
            <h4>Coin</h4>
            <h4>Ticker</h4>
            <h4>Price</h4>
            <h4>Holdings</h4>
            <h4>Value</h4>
            <h4>24h change</h4>
          </div>
        </div>
      </div>
      <Modal open={isOpen} type="add-asset" onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Portfolio;
