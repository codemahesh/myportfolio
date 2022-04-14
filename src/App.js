
import './App.css';
import GlobalStyles from './GlobalStyles';
import Header from './components/NavBar';
import HeroPage from './components/Heropage';
import AboutmeSection from './components/AboutMeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from 'components/ContactSection';
import FooterSection from 'components/FooterSection';

function App() {
  return (
   <div>
     <GlobalStyles/>
     <Header/>
     <HeroPage/>
     <AboutmeSection/>
     <ProjectSection/>
     <ContactSection/>
     <FooterSection/>
   </div>
  );
}

export default App;
