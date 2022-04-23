import React from "react";
import coin_card from "../../data/coin_data";
import '../css/product.css'

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
          <h1>The most trusted cryptocurrency platform</h1>
          {listItems}
      </div>
  )

};
