import {useState, useEffect} from 'react';

const Home = () => {
  const words = ['React', 'Angular', 'SpringBoot', 'Web'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); 
    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div id="home" className="page-section" >
      <h1>Hello my name is Alexander Soudry, welcome to my World</h1>
      <h1> I am the {words[currentWordIndex]} Developer that you need.</h1>
       <button
        onClick={() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }}
      >
        Click here to learn more.
      </button>
    </div>
  );
};

export default Home;