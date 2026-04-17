{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';
function App() {


  return (
    <>
    <NavigationBar></NavigationBar>
    <Home></Home>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    </>
  )
}

export default App
