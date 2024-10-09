import Navbar from './containers/navbar'
import Home from './containers/home'
import About from './containers/about';
import ContactForm from './containers/contact'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <ContactForm></ContactForm>
    </div>

  );
}

export default App;
