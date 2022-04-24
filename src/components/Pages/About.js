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
          <img id="body-img" src="https://i.pinimg.com/564x/4c/57/69/4c576990b3d51d6cb10368a6a07ab0c6.jpg" alt="IMG"></img>
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
        <h2>CONTRIBUTORS</h2>
        <div className="img-container-content2">
          <div className="intributor-container" id="Nguyen">
            <img src={Nguyen} class="team-img" id="nguyen-img" />
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
           
            <img src={Thanh} class="team-img" id="thanh-img" />
            <p className="name">Tann Tran </p>
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
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/f4/07/ff/f407ffde575a6eb00108b8e9b230f9d2.jpg" alt="img"></img>
          </div>
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/fc/74/d9/fc74d93f1ec9079e7f75bc10e5857242.jpg" alt="img"></img>
          </div>
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/f4/c3/34/f4c33495f7fe4d83ef5bda5cc49b214a.jpg" alt="img"></img>
          </div>
        </div>
        <div className="partners-container">
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/43/44/67/4344679ce0822514b0ed86a2817f96b0.jpg" alt="img"></img>
          </div>
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/72/15/bf/7215bf1d49e205413a32bf85a6fb5895.jpg" alt="img"></img>
          </div>
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/f0/38/75/f0387565df88f113584f106cf6babb88.jpg" alt="img"></img>
          </div>

        </div>
        <div className="partners-container">
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/f4/07/ff/f407ffde575a6eb00108b8e9b230f9d2.jpg" alt="img"></img>
          </div>
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/e8/c6/a2/e8c6a24f9d5f960687ed2b060f7082d1.jpg" alt="img"></img>
            </div>
          <div className="partners-item">
            <img src="https://i.pinimg.com/564x/5e/d3/41/5ed341187ba15a4a6e2bed26cd492664.jpg" alt="img"></img>
            </div>
        </div>
      </div>

    </div>
      );
};