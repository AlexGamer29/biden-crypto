import React from "react";
import '../css/home.css';

export const Home = () => {
  return (
    <div className="Body">
      <div className="content1">
        <div className="leftSide">
          <h1>Buy, trade, and hodl 100+ coins on Biden crypto</h1>
            <button name="button" type="button" id="bt"
            >Get started
            </button>
        </div>
        <div className="rightSide">
          <img id="body-img" src="https://media4.giphy.com/media/JpttR9RXNbTwoT7jAz/giphy.gif?cid=6c09b952fmp52q6kaxv6olp195pk4k4q4v3vky6jz4yibmnx&rid=giphy.gif&ct=s" alt="IMG">
          </img>
        </div>
      </div>
    </div>
  );
};
