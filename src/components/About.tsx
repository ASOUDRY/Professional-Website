import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const About = () => {
  return (
    <div id="about" className="page-section">
      <h2>About</h2>
      <div className="about">
        {/* <img src={profile} className="aboutImage" alt="profile" /> */}

        <div className="aboutSecond">
          <p>
            Greetings! I'm Alexander Soudry, a junior Full Stack Software Developer specializing in mobile-first full-stack applications. I delved into C+ during my final year at the University of Maryland Baltimore County, discovering my passion for programming. I embarked on a dedicated path to software development, honing my skills through comprehensive training.
          </p>

          <p>
            Starting with a Web Development course on Udemy and progressing to a Full Stack Software Development program with CareerFoundry, I gained practical experience as a software developer at Revature. Collaborating with a team of talented engineers, I became proficient in building mobile-first full-stack applications using Angular, Spring Boot, and React, contributing to projects both independently and collaboratively.
          </p>

          <p>
            I am skilled in quickly learning and incorporating new technologies, ensuring that I stay at the forefront of the ever-evolving tech landscape. My experience extends to working seamlessly in teams, and I possess leadership capabilities that allow me to lead projects effectively.
          </p>

          <p>
            Let's connect and explore opportunities for collaboration in the dynamic world of software development!
          </p>

          <Tabs
            defaultActiveKey="skills"
            id="about-tabs"
            className="mb-3"
          >
            <Tab eventKey="skills" title="Programming Skills">
              <ul>
                <li>HTML (2+ years)</li>
                <li>CSS (2+ years)</li>
                <li>JavaScript (2+ years)</li>
                <li>TypeScript (2+ years)</li>
                <li>Java (1+ year)</li>
                <li>React (2+ months)</li>
                <li>React Native (1+ years)</li>
                <li>Angular (1+ year)</li>
                <li>Maven (6+ months)</li>
                <li>Postgres SQL (6+ months)</li>
                <li>Amazon Web Services</li>
                <li>Docker</li>
              </ul>
            </Tab>

            <Tab eventKey="education" title="Education and Certification">
              <ul>
                <li>Full-Stack Immersion Certificate - CareerFoundry, Berlin, Germany 2021</li>
                <li>BA in Classical History - University of Maryland, Baltimore County 2018</li>
              </ul>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default About;