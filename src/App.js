
import './App.css';
import GlobalStyles from './GlobalStyles';
import Header from './components/NavBar';
import HeroPage from './components/Heropage';
import AboutmeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from 'components/ContactSection';

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
