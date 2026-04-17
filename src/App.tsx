import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    </>
  )
}
export default App