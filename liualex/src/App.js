import Navbar from './containers/navbar'
import Home from './containers/home'
import About from './containers/about';
import Experience from './containers/experience';
import Projects from './containers/projects';
import ContactForm from './containers/contact'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>

  );
}

export default App;
