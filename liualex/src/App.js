import Navbar from './containers/navbar'
import About from './containers/about';
import Experience from './containers/experience';
import Projects from './containers/projects';
import ContactForm from './containers/contact'
import Copyright from './containers/copyright';

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactForm/>
      <Copyright/>
    </div>

  );
}

export default App;
