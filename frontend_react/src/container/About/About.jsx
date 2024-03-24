import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="About">
      <h2 className="AboutText">About Me</h2>

      <Container>
        <Row>
          <Col sm={4}>
            <div className="profileImg">
              <div className="img">
                <img src="https://res.cloudinary.com/devdemo/image/upload/v1687426764/hasaqt6yhiegfgdttqgi.jpg" />
              </div>
            </div>
          </Col>

          <Col sm={8}>
            <div className="infos">
              {/* <div className="name">
              <h2>Devansh Trivedi</h2>
              <h4>@devanshtrivedii</h4>
            </div> */}
              <p className="text">
                I'm BTech Computer Science graduate with keen interest in
                Machine Learning and Product Development. I believe in
                leveraging technology by solving real world problems. I noticed
                that my work held the potential to spread positivity and impact
                other peoples’ lives in a thought-provoking manner.
              </p>
              <ul className="stats">
                <li>
                  <h3>850K</h3>
                  <h4>
                    LinkedIn<br></br>Impressions
                  </h4>
                </li>
                <li>
                  <h3>9+</h3>
                  <h4>Projects</h4>
                </li>
                <li>
                  <h3>5K+</h3>
                  <h4>Followers</h4>
                </li>
              </ul>
              <div className="links">
                <button className="follow">
                  {' '}
                  <a
                    href="https://drive.google.com/file/d/13USIPzje8Hag9oRltD7S_OnTR56TPvBp/view?usp=sharing"
                    target="_blank"
                    rel="noReferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Resume
                  </a>{' '}
                </button>
                <button className="view">
                  {' '}
                  <a
                    href="https://www.linkedin.com/in/devansh-trivedi-a937851b0/"
                    target="_blank"
                    rel="noReferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Follow me on LinkedIn
                  </a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// export default AppWrap(About, "app__about");

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'about__background'
);
