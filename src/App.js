
import './App.css';
import AboutmeSection from './components/AboutMeSection';
import HeroPage from './components/Heropage';
import Header from './components/NavBar';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
   <div>
     <GlobalStyles/>
     <Header/>
     <HeroPage/>
     <AboutmeSection/>
   </div>
  );
}

export default App;
