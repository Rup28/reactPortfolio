import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Techstack from './components/Techstacks/techstack';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Techstack/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
