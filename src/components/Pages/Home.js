import React from "react";
import '../css/home.css';
import phoneImage from '../../assets/img/img-home_page-content1.png';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="Body">
      <div className="content1">
        <div className="leftSide1">
          <a href="/product">Jump directly to your market !!!</a>
          <h1>Buy, trade, and hodl 100+ coins!</h1>
          <h4>Biden-crypto is the easiest place to buy <br></br> and sell cryptocurrency. Let's start your journey.</h4>
          {/* <button name="button" type="button" id="bt"
            >Get started
            </button> */}
        </div>
        <div className="rightSide1">
          <div className="border-img">
            <img id="body-img" src={phoneImage} alt="IMG">
            </img>
          </div>
        </div>
      </div>
      <div className="content2">
        <h1 id="ct2_h1">Create your wonderful portfolio today</h1>
        <h6 id="ct2_h6">Biden-crypto has a variety of features that make it the most perfect place to start trading</h6>

        <div className="in_content2">
          <div className="leftSide2">
            <div className="box1">
              <div className="img-box1">
                <img id="img-box1" src="https://i.pinimg.com/originals/b7/cb/39/b7cb39bb29038b743a4db8e0833e6de9.jpg" alt="img"></img>
              </div>
              <div className="text-box1">
                <h1>Manage your portfolio</h1>
                <h6> Buy and sell digital currencies, keep track in one place only.</h6>
              </div>
            </div>
            <div className="box2">
              <div className="img-box2">
                <img id="img-box2" src="https://i.pinimg.com/564x/de/a1/f1/dea1f13f38fd6b28d6fd271f901de6e8.jpg" alt="img"></img>
              </div>
              <div className="text-box2">
                <h1>Recurring buys</h1>
                <h6>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</h6>
              </div>
            </div>
            <div className="box3">
              <div className="img-box3">
                <img id="img-box3" src="https://i.pinimg.com/564x/77/89/58/77895880051c5155e7f2d203cfa5a9db.jpg" alt="img"></img>
              </div>
              <div className="text-box3">
                <h1>Mobile apps</h1>
                <h6>Coming soon!</h6>
              </div>
            </div>
          </div>
          <div className="space">
            {/* Just space, dont touch */}
          </div>
          <div className="rightSide2">
            <img id="img-rightSide2" src="https://i.pinimg.com/564x/38/d6/32/38d632ac63ac22d3ee285a67f71be9cf.jpg" alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
