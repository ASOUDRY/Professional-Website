import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="site-frame">
        <NavigationBar />
        <Home />
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;