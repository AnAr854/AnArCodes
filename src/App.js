import './CSS/main.css';
import {useState} from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Article from './Components/Article';

function App() {

  const [chosenTab, setChosenTab] = useState(0);

  function changeTab(tabNo){
    setChosenTab(tabNo);
  };

  return (
    <>
      <Header />
      <Navbar changeTab = {changeTab}/> 
      <Article id="aboutMe" heading="Minä" />
      <Article id="myProjects" heading="Projektit" />
      <Article id="links" heading="Linkit" />

    </>
  );
}

export default App;
