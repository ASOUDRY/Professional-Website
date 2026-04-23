import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/project.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      type: "Full Stack",
      name: "Translate Extension",
      description:
        "Chrome extension for capturing on-screen text and sending it to a backend translation service. Built with React, TypeScript, OCR workflows, and Spring Boot.",
      stack: ["React", "TypeScript", "Chrome Extension", "Spring Boot"],
      front: "https://github.com/ASOUDRY/Text-Capture-Extension",
      back: "https://github.com/ASOUDRY/Text-Capture-Backend",
    },
    {
      id: 2,
      type: "Backend",
      name: "AuthCore",
      description:
        "Reusable authentication service built with Spring Boot. Supports JWT authentication, refresh tokens, role-based access control, and PostgreSQL persistence.",
      stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
      back: "https://github.com/ASOUDRY/AuthCore",
    },
  ];

  return (
    <section id="projects" className="page-section">
      <div className="section-content projects-content">
        <h2>Projects</h2>
        <p className="projects-intro">
          A few projects that reflect my backend and full stack development work.
        </p>

        <div className="projects-grid">
          {projects.map((item) => (
            <Card key={item.id} className="project-card">
              <Card.Body>
                <span className="project-type">{item.type}</span>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p className="project-stack">
                  <strong>Stack:</strong> {item.stack.join(", ")}
                </p>
                <div className="project-links">
  {item.front && (
    <Button
      href={item.front}
      target="_blank"
      rel="noreferrer"
      className="btn-custom-primary"
    >
      Frontend Code
    </Button>
  )}

  {item.back && (
    <Button
      href={item.back}
      target="_blank"
      rel="noreferrer"
      className="btn-custom-secondary"
    >
      Backend Code
    </Button>
  )}
</div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;