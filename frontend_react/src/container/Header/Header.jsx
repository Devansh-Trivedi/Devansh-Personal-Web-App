import React from 'react';
import { AppWrap } from '../../wrapper';
import './Header.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Lottie from 'lottie-react';
import Rocket from './rocket.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="HeaderClass">
    <div className="headerText headerTextTop">
      Hey, I'm <span id="underline">Devansh Trivedi</span>
    </div>

    <div className="headerText">Let's connect</div>
    <div className="tagline">
      I'm a <span style={{ fontWeight: 'bold' }}>Software Engineer</span> who
      builds accessible, inclusive products and digital experiences for the
      people.
    </div>
    <br />
    <Lottie className="lottieRocket" animationData={Rocket} />

    <div className="center">
      <a href="#footerHead" className="button-primary">
        I'm just an Email away
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
        {/* <div className="header-review-block">
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
        </div> */}
      </div>
    </div>

    {/* //metrics */}

    {/* Scroll SVG */}
    <div className="scrollSVGLogo">
      <svg
        width="30px"
        height="100%"
        viewBox="0 0 247 390"
        version="1.1"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 1.5,
        }}
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style={{ fill: 'none', stroke: '#000000', strokeWidth: '20px' }}
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{ fill: 'none', stroke: '#000000', strokeWidth: '20px' }}
        />
      </svg>
    </div>
  </div>
);

export default AppWrap(Header, 'home');
