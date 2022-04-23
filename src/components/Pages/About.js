import React from "react";
import '../css/about.css';

export const About = () => {
  return (
    <div className="page">
      <h1>ABOUT US</h1>

      <div className="content1">
        <div className="leftSide1">
          <img id="body-img" src="https://i.pinimg.com/564x/0d/7d/52/0d7d520cf0764121c6568b070132db11.jpg" alt="IMG"></img>
        </div>
        <div className="rightSide1">
          <h2>The BINDEN CRYPTO COIN MARKET</h2>
          <p>  
      The Biden-Crypto is a place to exchange information, capitalization, and prices of the cryptocurrency market. It's is a decentralized cryptocurrency exchange platform that allows users to trade cryptocurrencies with each other.
      Biden-crypto is the easiest place to buy and sell cryptocurrency. Let's start your journey.
          </p>
        </div>
      </div>


      <div className="content2">
        <h2>Intributor</h2>
        <div className="img-container-content2">
          <div className="intributor-container" id="Nguyen">
            <img src="../../src/assets/img/NGuyen.jpg" alt="img"></img>
            <p>Truong Pham Tuan Nguyen</p>
          </div>
          <div className="intributor-container" id="Duc">
            <img src="../../src/assets/img/Duc.png" alt="img"></img>
            <p>Nguyen Huu Minh Duc</p>
          </div>
          <div className="intributor-container" id="Hieu">
            <img src="../../src/assets/img/trihieu.jpg" alt="img"></img>
            <p>Le Tri Hieu</p>
          </div>
          <div className="intributor-container" id="Thanh">
            <img src="../../src/assets/img/Thanh.jpg" alt="img"></img>
            <p>Tran Cong Thanh</p>
          </div>  
        </div>

      </div>
      <div className="partners">
        <h2>Some of our</h2>
        <h1>PARTNERS</h1>
        <div className="partners-container">
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/5c/b7/43/5cb74367552116dac922a5a46eb22c63.jpg" alt="img"></img>
          </div>
        </div>    
      </div>
      


    </div>


  );
};