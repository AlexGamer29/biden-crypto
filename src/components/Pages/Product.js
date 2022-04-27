import React from "react";
import coin_card from "../../data/coin_data";
import '../css/product.css'
import CoinTable from "../../data/coin_table";

export const Product= () => {
  console.log(coin_card);
  const listItems = coin_card.map((item) =>
      <div className="card" key={item.id}>
          <div className="card_img">
              <img src={item.img} />
          </div>
          <div className="card_header">
              <h2>{item.coin_name}</h2>
              <p>{item.description}</p>
              <p className="price">{item.price}<span>{item.currency}</span></p>
              <div className="btn">Add to cart</div>
          </div>
      </div>

  );
  return (
      <div className="main_content">
          <div className="header">The most trusted crypto currency platform</div>
          <div className="text-below-header">Coinbase has a variety of features that make it the best place to start trading</div>
          {listItems}
          <CoinTable/>
          <div className="header">The most trusted cryptocurrency platform</div>
          <div className="text-below-header">Here are a few reasons why you should choose Coinbase</div>
          <div className="secure">
              <div className="secure-block">
                  <img/>
                  <div className="Header"></div>
                   <div className="text-below-headwer"></div>

              </div>

          </div>
      </div>
  )

};
