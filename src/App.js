
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
   </div>
  );
}

export default App;
