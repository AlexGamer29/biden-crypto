import React from "react";
import coin_card from "../../data/coin_data";
import '../css/product.css'

export const Product= () => {
  const listItems = coin_card.map((item)=>
  <div className="card" key={item.id}>
    <div className="card_img">
      <img src={item.img} alt=""/>
    </div>
    <div className="card_header">
      <h2>{item.coin_name}</h2>
      <h2>{item.description}</h2>
      <p className="price">{item.currency}<span>{item.price}</span></p>
      <button className="btn_add">Add to cart</button>
    </div>

  </div>
  
  )
  return (
    <div className="main_contain">
      {listItems}
    </div>
  );
};
