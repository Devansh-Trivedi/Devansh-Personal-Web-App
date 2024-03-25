import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <h2 className="Recomm-Text">What people have to say about me!</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="testimonial_image_card">
              <Image
                id="image_card_test"
                className="testimonial_img_box"
                src="https://res.cloudinary.com/devdemo/image/upload/v1689321581/Devansh%20Website/Screenshot_20230714-131742_2_vzflzv.png"
              />
            </Col>
            <Col xs={12} md={6} className="testimonial_image_card">
              <Image
                id="image_card_test"
                className="testimonial_img_box"
                src="https://res.cloudinary.com/devdemo/image/upload/v1689321581/Devansh%20Website/Screenshot_20230714-131750_2_afopll.png"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="Recomm-Text">Recognition</h2>
              <Row>
                <Col xs={12} md={12} className="recognitionImg">
                  <Image
                    id="image_card_test"
                    className="testimonial_img_box"
                    src="https://res.cloudinary.com/devdemo/image/upload/v1711357656/Devansh%20Website/1706465574745_page-0001_nlxohh.jpg"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'testimonials__background'
);
