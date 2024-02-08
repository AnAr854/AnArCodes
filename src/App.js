import './CSS/main.css';
import Header from './Components/Header';
import Article from './Components/Article';

function App() {

  return (
    <>
      <Header />
      <Article id="aboutMe" heading="Minä" />
      <Article id="myProjects" heading="Projektit" />
      <Article id="links" heading="Linkit" />
    </>
  );
}

export default App;
