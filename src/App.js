import React from 'react';
import './CSS/main.css';
import MoreAboutMe from './pages/MoreAboutMe';
import MainPage from './pages/MainPage';
import Header from './Components/Header';
import Article from './Components/Article';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/MoreAboutMe" element={<MoreAboutMe />} />
      </Routes>
    <Article id="links" />
    </Router>
  );
}

export default App;
