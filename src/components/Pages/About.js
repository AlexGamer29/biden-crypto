import React from "react";
import '../css/about.css';
export const About = () => {
  return (
    <div className="page">
      <h1>ABOUT</h1>

      <div className="content1">
        <div className="leftSide1">
          <img id="body-img" src="https://i.pinimg.com/564x/0d/7d/52/0d7d520cf0764121c6568b070132db11.jpg" alt="IMG"></img>
        </div>
        <div className="rightSide1">
          {/* text */}
        </div>
      </div>


      <div className="content2">
        <h2>Intributor</h2>
        <div className="img-container-content2">
          <div className="intributor-container" id="Nguyen">
            <img src="" alt="img"></img>
            <p>Truong Pham Tuan Nguyen</p>
          </div>
          <div className="intributor-container" id="Duc">
            <img src="" alt="img"></img>
            <p>Nguyen Huu Minh Duc</p>
          </div>
          <div className="intributor-container" id="Hieu">
            <img src="" alt="img"></img>
            <p>Le Tri Hieu</p>
          </div>
          <div className="intributor-container" id="Thanh">
            <img src="" alt="img"></img>
            <p>Tran Cong Thanh</p>
          </div>
        </div>
      </div>

      <div className="content3">
        
      </div>




    </div>

  );
};
