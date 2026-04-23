import about from '../images/about_me.jpg'
import  "../css/about.css"

const About = () => {
  return (
    <section id="about" className="section-content">
      <div className = "section-content about-content">
      <h2>About Me</h2>
      <div className="about">
        <img src={about} className="aboutImage" alt="profile" />
        <div className="aboutSecond">
        <p>I'm Alexander Soudry, a full stack software developer focused on building practical, secure, and scalable web applications. 
        I discovered my interest in programming while studying at the University of Maryland, Baltimore County, where I began working with C++ and decided to pursue software development more seriously. </p>
        <p> Since then, I have built my skills through formal training, independent study, and professional experience. 
        After completing web development training on Udemy and a full stack software development program with CareerFoundry, I worked at Revature, where I collaborated with other engineers to build mobile-first applications using Angular, Spring Boot, and React.</p>
        <p>My work has given me experience across both frontend and backend development, with a strong interest in building reliable APIs, authentication systems, and user-focused applications. 
        I learn new tools quickly, adapt well to changing project needs, and work effectively both independently and as part of a team.</p>
        <p>I’m currently looking for opportunities where I can continue growing as a developer while contributing to meaningful, well-built software.</p>
          <div className="about-panels">
          <div className="about-panel">
            <h3>Skills</h3>
            <ul>
                <li>HTML (3+ years)</li>
                <li>CSS (3+ years)</li>
                <li>JavaScript (3+ years)</li>
                <li>TypeScript (3+ years)</li>
                <li>Java (3+ year)</li>
                <li>Spring (2+ year)</li>
                <li>React (3+ months)</li>
                <li>React Native (3+ years)</li>
                <li>Angular (3+ year)</li>
                <li>Maven (3+ months)</li>
                <li>Postgres SQL (3+ months)</li>
                <li>Amazon Web Services</li>
                <li>Docker</li>

            </ul>
          </div>
          <div className="about-panel">
            <h3>Education & Certification</h3>
            <ul>
                <li>Java Certified Foundations Associate - Oracle 2025</li>
                <li>Advanced Java - Code Academy 2024</li>
                <li>Full-Stack Immersion Certificate - CareerFoundry, Berlin, Germany 2021</li>
                <li>BA in Classical History - University of Maryland, Baltimore County 2018</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;