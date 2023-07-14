import React from "react";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.css";
import Lottie from "lottie-react";
import Rocket from "./rocket.json";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="HeaderClass">
    <div className="headerText headerTextTop">
      Hey, I'm <span className="name">Devansh Trivedi </span>
    </div>

    <div className="headerText">Let's connect</div>
    <div className="tagline">
      I'm a Software Engineer who builds accessible, inclusive products and
      digital experiences for the people.
    </div>
    <br />
    <Lottie className="lottieRocket" animationData={Rocket} />

    <div className="center">
      <a href="mailto:tridevansh.160601@gmail.com" className="button-primary">
        I'm just a Email away
      </a>
    </div>
    {/* //ratings */}
    <div className="center">
      <div className="header-review-group">
        <div className="header-review-avatars">
          <div className="header-review-avatar first-avatar">
            <img
              src="https://res.cloudinary.com/devdemo/image/upload/v1688160089/leetcode_logo_m6cqxu.png"
              loading="lazy"
              alt=""
              className="image-cover"
            />
          </div>
          <div className="header-review-avatar">
            <img
              src="https://res.cloudinary.com/devdemo/image/upload/v1688160070/codechef_logo_dgg74k.jpg"
              loading="lazy"
              alt=""
              className="image-cover"
            />
          </div>
          <div className="header-review-avatar">
            <img
              src="https://res.cloudinary.com/devdemo/image/upload/v1688160440/kaggle_logo_zx2ejg.jpg"
              loading="lazy"
              alt=""
              className="image-cover"
            />
          </div>
        </div>
        <div className="header-review-block">
          <div className="header-review-star">
            <div className="icon-regular-3 w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.5196L16.15 20.0296C16.91 20.4896 17.84 19.8096 17.64 18.9496L16.54 14.2296L20.21 11.0496C20.88 10.4696 20.52 9.36964 19.64 9.29964L14.81 8.88964L12.92 4.42964C12.58 3.61964 11.42 3.61964 11.08 4.42964L9.19001 8.87964L4.36001 9.28964C3.48001 9.35964 3.12001 10.4596 3.79001 11.0396L7.46001 14.2196L6.36001 18.9396C6.16001 19.7996 7.09001 20.4796 7.85001 20.0196L12 17.5196Z"
                  fill="#E5CB61"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="paragraph-large-5 text-weight-bold">4.2/5</div>
            <div className="paragraph-small-7 text-color-gray-600">Ratings</div>
          </div>
        </div>
      </div>
    </div>

    {/* //metrics */}
    <div className="w-layout-grid t-grid-two-column-2">
      <div className="t-header-review">
        <div className="t-header-review-icon">
          <div className="t-icon-regular w-embed">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="t-header-review-content">
          <h4 className="t-h4-heading">94000+</h4>
          <p className="paragraph-small-6 text-color-gray-600">
            Lines of code written
          </p>
        </div>
      </div>

      <div className="t-header-review">
        <div className="t-header-review-icon green">
          <div className="icon-regular-2 w-embed">
            <svg
              width="32"
              height="32"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1459 7.05374L18.5859 8.49374L13.7059 13.3737L10.4159 10.0837C10.0259 9.69374 9.39588 9.69374 9.00588 10.0837L3.00588 16.0937C2.61588 16.4837 2.61588 17.1137 3.00588 17.5037C3.39588 17.8937 4.02588 17.8937 4.41588 17.5037L9.70588 12.2037L12.9959 15.4937C13.3859 15.8837 14.0159 15.8837 14.4059 15.4937L19.9959 9.91374L21.4359 11.3537C21.7459 11.6637 22.2859 11.4437 22.2859 11.0037V6.70374C22.2959 6.42374 22.0759 6.20374 21.7959 6.20374H17.5059C17.0559 6.20374 16.8359 6.74374 17.1459 7.05374Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="t-header-review-content">
          <h4 className="t-h4-heading">9+</h4>
          <p className="paragraph-small-6 text-color-gray-600">Projects done</p>
        </div>
      </div>

      <div
        id="w-node-_4ef794a0-7db1-ef1d-3369-c690df0d448d-fee5e684"
        className="t-header-logo-wrap"
      >
        <div className="t-header-logo-content">
          <div className="t-header-logo-divider"></div>
          <div className="t-caption-regular">Have worked at</div>
        </div>
        <div className="t-header-logo-block">
          <img
            src="https://bookface-images.s3.amazonaws.com/logos/545e403209c1c7a3d7a847b1eafd0a622c4554e6.png"
            loading="lazy"
            alt=""
            className="t-header-logo"
          />
          <img
            src="https://images.crunchbase.com/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw"
            loading="lazy"
            alt=""
            className="t-header-logo"
          />
          <img
            src="data:image/png;base64,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"
            loading="lazy"
            alt=""
            className="t-header-logo"
          />
          <img
            src="https://themlco.com/assets/images/logo-square.png"
            loading="lazy"
            alt=""
            className="t-header-logo"
          />
          <img
            src="https://production-cuvette.s3.ap-south-1.amazonaws.com/cuvette_logo.png"
            loading="lazy"
            alt=""
            className="t-header-logo"
          />
          {/* <img
            src="https://assets.website-files.com/5fa298c0bded9141021f03fa/636c9264568f863a25d699c7_youtube.svg"
            loading="lazy"
            alt=""
            className="t-header-logo"
          /> */}
        </div>
      </div>
    </div>

    {/* Scroll SVG */}
    <div className="scrollSVGLogo">
      <svg
        width="30px"
        height="100%"
        viewBox="0 0 247 390"
        version="1.1"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style={{ fill: "none", stroke: "#000000", strokeWidth: "20px" }}
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{ fill: "none", stroke: "#000000", strokeWidth: "20px" }}
        />
      </svg>
    </div>
  </div>
);

export default AppWrap(Header, "home");
