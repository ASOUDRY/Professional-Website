import { Button } from 'react-bootstrap';
const Home = () => {
  return (
    <section id="home" className="page-section" >
      <div className="section-content">
        <h1>Alexander Soudry</h1>
        <h1> I build secure backend systems and practical web tools with Java, Spring Boot, React, and TypeScript.</h1>
        <Button
          onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        >
          About Me.
        </Button>
          <Button
          onClick={() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
        >
          Recent Projects.
        </Button>
      </div>
    </section>
  );
};

export default Home;