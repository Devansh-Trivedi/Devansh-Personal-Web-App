import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="headingText">Skills & Experiences</h2>

      <div className="app__skills-container">
        {/* <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div> */}
        <div className="app__skills-exp">
          {experiences
            .slice(0)
            .reverse()
            .map((experience) => (
              <motion.div
                className="app__skills-exp-item card"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div
                  className="app__skills-exp-works"
                  key={experience.role}
                >
                  <div className="mobile-view-date">
                    <p>{experience.year}</p>
                  </div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.role}
                    key={experience.role}
                  >
                    <h4 className="bold-text">
                      <span style={{fontWeight: "bold"}}>{experience.role} </span>
                       {/* - Internship Certificate:{" "} */}
                      {/* <span>
                        <a
                          href={experience.link}
                          target="_blank"
                          className="link-text"
                          style={{ textDecoration: "underline" }}
                          rel="noreferrer"
                        >
                          [ Link ]
                        </a>
                      </span> */}
                    </h4>

                    <p>
                      <a
                        href="https://google.co.in/"
                        target="_blank"
                        className="company_name"
                        rel="noreferrer"
                      >
                        {experience.company}
                      </a>
                    </p>
                  </motion.div>
                  {experience.works.map((work) => (
                    <>
                      <div className="expList">
                        {/* <ul> */}
                          <ul className="workDescription" key={work.desc}>
                            {work.desc}
                          </ul>
                        {/* </ul> */}
                      </div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "skills__background"
);
