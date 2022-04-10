import React from "react";
import '../css/home.css';

export const Home = () => {
  return (
    <div className="Body">
      <div className="content1">
        <div className="leftSide1">
          <h1>Buy, trade, and hodl 100+ coins!</h1>
          <h4>Biden-crypto is the easiest place to buy and sell cryptocurrency. Let's start your journey.</h4>
            {/* <button name="button" type="button" id="bt"
            >Get started
            </button> */}
        </div>
        <div className="rightSide1">
          <img id="body-img" src="https://media4.giphy.com/media/JpttR9RXNbTwoT7jAz/giphy.gif?cid=6c09b952fmp52q6kaxv6olp195pk4k4q4v3vky6jz4yibmnx&rid=giphy.gif&ct=s" alt="IMG">
          </img>
        </div>
      </div>
      <div className="content2">
        <h1 id="ct2_h1">Create your wonderful portfolio today</h1>
        <h6 id="ct2_h6">Biden-crypto has a variety of features that make it the most perfect place to start trading</h6>

        <div className="in_content2">
            <div className="leftSide2">
                <div className="box1">
                    {/* <img alt="img" src="https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-graph-vector-icon-png-image_470654.jpg"></img> */}
                </div>
                <div className="box2">

                </div>
                <div className="box3">

                </div>
            </div>
            <div className="rightSide2">

            </div>
        </div>
      </div>
    </div>
  );
};
