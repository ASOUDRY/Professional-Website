import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavigationBar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    // const sections = document.querySelectorAll("section[id], div[id]");
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar expand="lg" bg="light" className="border-bottom sticky-top w-100">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home">Welcome to My World</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          {/* <Nav variant="pills" className="ms-auto" activeKey={activeSection}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav> */}
          <Nav variant="pills" className="ms-auto" activeKey={activeSection}>
  <Nav.Link eventKey="#home" href="#home">Home</Nav.Link>
  <Nav.Link eventKey="#about" href="#about">About</Nav.Link>
  <Nav.Link eventKey="#projects" href="#projects">Projects</Nav.Link>
  {/* <Nav.Link eventKey="#contact" href="#contact">Contact</Nav.Link> */}
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;