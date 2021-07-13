import { useState, useEffect } from "react";
import { useAssets } from "../../hooks/useAssets";
import { useModal } from "../../hooks/useModal";
import { ModalController } from "../modal/ModalController";

const Portfolio = () => {
  const assets = useAssets();
  const [balance, setBalance] = useState(0);
  const [change, setChange] = useState(0);
  const [profit, setProfit] = useState(0);
  const [isOpen, toggleIsOpen] = useModal();
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__heading">
          <h2 className="heading-secondary">Portfolio 💰</h2>
        </div>
        <div className="features">
          <div className="features__balance">
            <span id="balance">$ {balance}</span>Total balance
          </div>
          <div className="features__price">
            <span id="price">$ {change}</span>24h portfolio change
          </div>
          <div className="features__profit">
            <span id="profit">$ {profit}</span>Total profit / loss
          </div>
        </div>
        <div className="add-new">
          <button className="add-new__btn" onClick={toggleIsOpen}>
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
      <ModalController open={isOpen} type="add-asset" onClose={toggleIsOpen} />
    </>
  );
};

export default Portfolio;
