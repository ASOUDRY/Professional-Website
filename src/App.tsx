import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="site-frame">
    <NavigationBar></NavigationBar>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    {/* <Contact></Contact> */}
    <Footer></Footer>
    </div>
    </>
  )
}
export default App