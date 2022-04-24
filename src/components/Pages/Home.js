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
          <h1>Buy, trade, and hold 100+ coins!</h1>
          <h4>Biden-crypto is the easiest place to buy <br></br> and sell cryptocurrency. Let's start your journey.</h4>
          {/* <button name="button" type="button" id="bt"
            >Get started
            </button> */}
        </div>
        <div className="rightSide1">
          <div className="border-img" id="phone-img">
            <svg
              width={480}
              height={756}
              viewBox="0 0 680 956"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="HeroVariant__HeroImage-sc-1o7093z-6 PCcMF">
              <circle cx={340} cy={428} r={340} fill="#F1F5FE" />
              <g filter="url(#prefix__filter0_dd)">
                <path
                  d="M481 10H198c-32.032 0-58 25.968-58 58v720c0 32.032 25.968 58 58 58h283c32.032 0 58-25.968 58-58V68c0-32.032-25.968-58-58-58z"
                  fill="url(#prefix__paint0_linear)"
                />
                <path
                  d="M472.489 22H206.511C176.406 22 152 47.222 152 78.335v699.33C152 808.778 176.406 834 206.511 834h265.978C502.594 834 527 808.778 527 777.665V78.335C527 47.222 502.594 22 472.489 22z"
                  fill="url(#prefix__img1)"
                />
                <g filter="url(#prefix__filter1_f)">
                  <path
                    d="M213.5 15.5c-38.883 0-67.5 23.943-67.5 61.343V783.5c0 20.5 11.5 57 65.5 57"
                    stroke="url(#prefix__paint1_radial)"
                  />
                </g>
                <g filter="url(#prefix__filter2_f)">
                  <path
                    d="M465.5 15c38.883 0 67.5 23.943 67.5 61.343V783c0 20.5-11.5 57-65.5 57"
                    stroke="url(#prefix__paint2_radial)"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="prefix__filter0_dd"
                  x={48}
                  y={0}
                  width={519}
                  height={956}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx={-32} dy={50} />
                  <feGaussianBlur stdDeviation={30} />
                  <feColorMatrix values="0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={15} />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feColorMatrix values="0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0.1 0" />
                  <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                </filter>
                <filter
                  id="prefix__filter1_f"
                  x="143.5"
                  y={13}
                  width={72}
                  height={830}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation={1} result="effect1_foregroundBlur" />
                </filter>
                <filter
                  id="prefix__filter2_f"
                  x="463.5"
                  y="12.5"
                  width={72}
                  height={830}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation={1} result="effect1_foregroundBlur" />
                </filter>
                <radialGradient
                  id="prefix__paint1_radial"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(286.75008 212.24974 -632.54832 854.57482 179.75 390.25)"
                >
                  <stop stopOpacity="0.2" />
                  <stop offset={1} stopOpacity={0} />
                </radialGradient>
                <radialGradient
                  id="prefix__paint2_radial"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(0 756.5 -2254.52 0 499 131)"
                >
                  <stop stopOpacity={0} />
                  <stop offset="0.453" stopOpacity="0.2" />
                  <stop offset={1} stopOpacity={0} />
                </radialGradient>
                <linearGradient
                  id="prefix__paint0_linear"
                  x1={539}
                  y1={654}
                  x2="-169.5"
                  y2="799.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F2F2F3" />
                  <stop offset="0.64" stopColor="#CACED2" />
                </linearGradient>
                <pattern
                  id="prefix__img1"
                  patternUnits="objectBoundingBox"
                  width={1}
                  height={1}
                  viewBox="0 0 375 812"
                >
                  <image
                    href="https://assets.coinbase.com/assets/portfolio.352f1ebd5622fb93068757ca3a33b88b.svg"
                    width={375}
                    height={812}
                  />
                </pattern>
              </defs>
            </svg>

          </div>
        </div>
      </div>

      <div className="blue-site">
      <div id="strip"></div>
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
                <img id="img-box2" src="https://us.123rf.com/450wm/axis213/axis2132001/axis213200100289/140288262-time-icon-time-and-watch-timer-symbol-ui-web-sign-flat-design-app-stock-passage-of-time-icon-.jpg?ver=6" alt="img"></img>
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
            <img id="img-rightSide2" src="https://img.freepik.com/free-vector/display-stock-market-quotes-falling-graph-candlestick-graph-white-background-stock-market-investment-trades_174639-40475.jpg?w=2000" alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
