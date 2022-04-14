
import ContactSection from './components/ContactSection';
import './App.css';
import AboutmeSection from './components/AboutMeSection';
import HeroPage from './components/Heropage';
import Header from './components/NavBar';
import ProjectSection from './components/ProjectSection';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
   <div>
     <GlobalStyles/>
     <Header/>
     <HeroPage/>
     <AboutmeSection/>
     <ProjectSection/>
     <ContactSection/>
   </div>
  );
}

export default App;
