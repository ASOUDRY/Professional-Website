import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {

  const fullstack = [
    { id: 1, name: 'Translate Extension', 
    description: "A Chrome extension that produces a pop up for extracting, and translating text.", 
    front: "https://github.com/ASOUDRY/Text-Capture-Extension",
    back: "https://github.com/ASOUDRY/Text-Capture-Backend"
    }
  ];

    const backend = [
    { id: 2, name: 'AuthCore', 
    description: "A light weight backend login service designed to be modular for multiple projects.", 
    back: "https://github.com/ASOUDRY/AuthCore",  
  },
  ];

  const cardStyle = {
    width: '300px',
    height: '300px', 
    margin: '20px'
  };

  const fullstackCard = fullstack.map((item) => (
    <div key={item.id}>
      <Card style={cardStyle}>
        <Card.Body style={{ maxHeight: '220px', overflow: 'hidden' }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button href={item.front} variant="primary">Link to Frontend code</Button>
          <Button variant="primary">Link to Backend code</Button>
        </Card.Body>
      </Card>
    </div>
  ));
    const backendCard = backend.map((item) => (
    <div key={item.id}>
      <Card style={cardStyle}>
        <Card.Body style={{ maxHeight: '220px', overflow: 'hidden' }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary">Link to Backend code</Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <section id="projects" className="page-section">
      <div className="section-content">
      <h2>Projects</h2>
      <p>My latest projects</p>
      <div className='projects'>
        {fullstackCard}
        {backendCard}
      </div>
      </div>
    </section>
  );
};

export default Projects;