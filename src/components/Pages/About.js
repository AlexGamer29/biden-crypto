import React from "react";
import '../css/about.css';
import Nguyen from "../../assets/img/Nguyen.png";
import Duc from "../../assets/img/Duc.png";
import Thanh from "../../assets/img/Thanh.png";
import Hieu from "../../assets/img/Hieu.png";


export const About = () => {
  return (
    <div className="page">
      <h1>ABOUT US</h1>

      <div className="content1">
        <div className="leftSide1">
          <img id="body-img" src="https://i.pinimg.com/564x/0d/7d/52/0d7d520cf0764121c6568b070132db11.jpg" alt="IMG"></img>
        </div>
        <div className="rightSide1">
          <h3 id="right-heading">The BIDEN CRYPTO COIN MARKET</h3>
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
            <img src={Nguyen} class="team-img" id="nguyen-img"/>
            <p className="name">Steven Truong</p>
            <p className="role">CEO</p>
          </div>
          <div className="intributor-container" id="Duc">
            <img src={Duc} class="team-img" id="duc-img" ></img>
            <p className="name">Alex Nguyen</p>
            <p className="role">Full-stack developer</p>
          </div>
          <div className="intributor-container" id="Hieu">
            <img src={Hieu} class="team-img" id="hieu-img"></img>
            <p className="name">Le Tri Hieu</p>
            <p className="role">Front-end developer</p>
          </div>
          <div className="intributor-container" id="Thanh">
            {/* <img src="../../src/assets/img/Thanh.jpg" alt="img"></img> */}
            <img src={Thanh} class="team-img" id="thanh-img"/>     
            <p className="name">Tran Cong Thanh</p>
            <p className="role">Back-end developer</p>
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