import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

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
      {/* {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgurl).url()} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}

      {/* <Image src="https://res.cloudinary.com/devdemo/image/upload/v1689317690/Devansh%20Website/Screenshot_19_bqbzhb.png" fluid />
      <Image src="https://res.cloudinary.com/devdemo/image/upload/v1689317690/Devansh%20Website/Screenshot_20_xlo1nd.png" fluid /> */}
      {/* <div>
        <h1 className="headingText">Recommendations</h1>
      </div> */}

      <div>
        <Container>
          <Row>
            <Col >
              <h2 className="Recomm-Text">Recommendations</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="image_card">
              <Image
                className="img_box"
                src="https://res.cloudinary.com/devdemo/image/upload/v1689321581/Devansh%20Website/Screenshot_20230714-131742_2_vzflzv.png"
              />
            </Col>
            <Col xs={12} md={6} className="image_card">
              <Image
                className="img_box"
                src="https://res.cloudinary.com/devdemo/image/upload/v1689321581/Devansh%20Website/Screenshot_20230714-131750_2_afopll.png"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "testimonials__background"
);
