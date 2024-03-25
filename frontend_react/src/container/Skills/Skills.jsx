import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

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
      <div className="app__skills-container">
        <h2 className="headingText">Skills & Experiences</h2>
        <div className="app__skills-exp">
          <main className="CV-page">
            <div className="CV-grid">
              <div className="CV-grid-column">
                <div className="CV-jobs">
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        Software Engineer{' '}
                      </span>
                      &#8211;{' '}
                      <span className="CV-timeline-heading-location">
                        ENGIE{' '}
                      </span>
                      <small className="CV-timeline-heading-duration">
                        Jul 2023 - Present
                      </small>
                    </h3>

                    <>
                      <div className="expList">
                        {/* <ul> */}
                        <ul className="CV-timeline-details">
                          <li className="CV-job-timeline-item">
                            Contributing to the Enterprise Integration vertical
                            for ENGIE, a prominent French multinational utility
                            company.
                          </li>
                          <li className="CV-job-timeline-item">
                            Orchestrated the construction and supervision of
                            data aggregation workflows within the Talend
                            platform, optimizing the consolidation of data from
                            diverse sources into a unified, versatile database
                            system.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            Collaborating cross-functionally to understand
                            business needs, providing data-driven solutions that
                            align with ENGIE's objectives.
                          </li>
                          <li className="CV-job-timeline-item">
                            {' '}
                            Implemented design patterns such as MVC to enhance
                            performance and enhance code readability, with a
                            focus on deploying applications through AWS EC2 and
                            S3 services.
                          </li> */}
                        </ul>
                      </div>
                    </>
                  </section>
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        Software Engineer{' '}
                      </span>
                      &#8211;{' '}
                      <span className="CV-timeline-heading-location">
                        TCS (Digital){' '}
                      </span>
                      <small className="CV-timeline-heading-duration">
                        Jul 2023 - Present
                      </small>
                    </h3>

                    <>
                      <div className="expList">
                        {/* <ul> */}
                        <ul className="CV-timeline-details">
                          <li className="CV-job-timeline-item">
                            Pioneering data engineering solutions at TCS,
                            driving innovation in the seamless integration of
                            diverse data sources for optimal processing and
                            analysis.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            Instrumental in developing scalable and
                            high-performance data architectures, enhancing the
                            client organization's ability to extract meaningful
                            insights from large datasets.
                          </li> */}
                          <li className="CV-job-timeline-item">
                            Directing the development and oversight of data
                            aggregation processes on the Talend platform,
                            streamlining the merging of data from various
                            origins into a cohesive and adaptable database
                            system.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            {' '}
                            Spearheading the design and implementation of robust
                            data pipelines, leveraging cutting-edge technologies
                            to ensure efficient data flow and storage.
                          </li> */}
                        </ul>
                      </div>
                    </>
                  </section>
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        Software Engineer Intern (Backend){' '}
                      </span>
                      &#8211;{' '}
                      <span className="CV-timeline-heading-location">
                        Voosh (YCombinator'21){' '}
                      </span>
                      <small className="CV-timeline-heading-duration">
                        Oct 2022 - Mar 2023
                      </small>
                    </h3>

                    <>
                      <div className="expList">
                        {/* <ul> */}
                        <ul className="CV-timeline-details">
                          <li className="CV-job-timeline-item">
                            Contributed in the developemnt of their US product
                            at Voosh, a San Francisco based YCombinator startup.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            Automated the server side resources using AWS Lambda
                            and increased its efficiency using Elastic Search.
                          </li>
                          <li className="CV-job-timeline-item">
                            Used MVC Design pattern, and developed automation
                            solutions leveraging shell and Perl to increase the
                            efficiency.
                          </li> */}
                        </ul>
                      </div>
                    </>
                  </section>
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        Product Intern{' '}
                      </span>
                      &#8211;{' '}
                      <span className="CV-timeline-heading-location">
                        Cuvette
                      </span>
                      <small className="CV-timeline-heading-duration">
                        Mar 2022 - Nov 2022
                      </small>
                    </h3>

                    <>
                      <div className="expList">
                        {/* <ul> */}
                        <ul className="CV-timeline-details">
                          <li className="CV-job-timeline-item">
                            Designed and organised a full-fledge, Product
                            building bootcamp for users at Cuvette where I
                            provided mentorship to 500+ students for developing
                            a MERN stack web application.
                          </li>
                          <li className="CV-job-timeline-item">
                            Run programs to increase the reach of the platform
                            and co-ordinated with tech team for resolving user
                            related issues.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            Worked along with Founders and participated in
                            Product building discussions and looked after the
                            Operations single handedly.
                          </li> */}
                        </ul>
                      </div>
                    </>
                  </section>
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        Product Intern{' '}
                      </span>
                      &#8211;{' '}
                      <span className="CV-timeline-heading-location">
                        Newton School
                      </span>
                      <small className="CV-timeline-heading-duration">
                        Oct 2021 - Mar 2022
                      </small>
                    </h3>

                    <>
                      <div className="expList">
                        {/* <ul> */}
                        <ul className="CV-timeline-details">
                          <li className="CV-job-timeline-item">
                            Worked closely with operations team to ensure
                            smoothing working and functioning of web
                            application.
                          </li>
                          <li className="CV-job-timeline-item">
                            Participate in the planning, development and
                            execution of user training and communication for all
                            customer facing technology releases/ changes.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            Executed Quality Checks (QC’s) for the instructors
                            and provided support for weekly and monthly
                            management reporting across Controls, Business
                            Resiliency, and Business Management.
                          </li> */}
                        </ul>
                      </div>
                    </>
                  </section>
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        Software Engineer Intern (Backend & Cloud){' '}
                      </span>
                      &#8211;{' '}
                      <span className="CV-timeline-heading-location">
                        Mapreks Systems
                      </span>
                      <small className="CV-timeline-heading-duration">
                        Sept 2021 - Nov 2021
                      </small>
                    </h3>

                    <>
                      <div className="expList">
                        {/* <ul> */}
                        <ul className="CV-timeline-details">
                          <li className="CV-job-timeline-item">
                            Worked on ANPR system, and developed a model and
                            achieved 92% accuracy.
                          </li>
                          <li className="CV-job-timeline-item">
                            Trained YOLO v5 on the custom dataset. Tested the
                            output with existing license plate data.
                          </li>
                          <li className="CV-job-timeline-item">
                            Implemented Research Paper, Used OpenCV and
                            Candidate Analysis to detect the location of core
                            and delta of Car License plate, used modular
                            Architecture for training the model and to improve
                            the accuracy.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            Worked on Linode as a Cloud platform to store and
                            deploy the model in production.
                          </li> */}
                        </ul>
                      </div>
                    </>
                  </section>
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        Software Engineer Intern{' '}
                      </span>
                      &#8211;{' '}
                      <span className="CV-timeline-heading-location">
                        The Machine Learning Company
                      </span>
                      <small className="CV-timeline-heading-duration">
                        Jan 2021 - Jun 2021
                      </small>
                    </h3>

                    <>
                      <div className="expList">
                        {/* <ul> */}
                        <ul className="CV-timeline-details">
                          <li className="CV-job-timeline-item">
                            Developed backend for the applications using NodeJS
                            and Express.
                          </li>
                          <li className="CV-job-timeline-item">
                            Built endpoints using Rest API, tested in Postman
                            and used MongoDB database in backend.
                          </li>
                          <li className="CV-job-timeline-item">
                            Perform debug and performance analysis of code and
                            systems.
                          </li>
                          {/* <li className="CV-job-timeline-item">
                            Assist in defining, automating, and executing
                            development tests in support of the
                            feature/functionality being developed.
                          </li> */}
                        </ul>
                      </div>
                    </>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'skills__background'
);
