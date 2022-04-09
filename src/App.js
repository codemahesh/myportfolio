
import './App.css';
import HeroPage from './components/Heropage';
import Header from './components/NavBar';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
   <div>
     <GlobalStyles/>
     <Header/>
     <HeroPage/>
   </div>
  );
}

export default App;
