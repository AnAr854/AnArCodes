import React from 'react'; 
import Matopeli from "./Matopeli";
import Onnenpyora from "./Onnenpyora";
import Fribago from "./Fribago";
import IpaKonevuokraamo from "./IpaKonevuokraamo";
import Kirjanpitaja from "./Kirjanpitaja";
import Portfolio from "./Portfolio";


function Projects(props){

    const projects = {
      Matopeli: Matopeli,
      Onnenpyora: Onnenpyora,
      Fribago: Fribago,
      IpaKonevuokraamo: IpaKonevuokraamo,
      Kirjanpitaja: Kirjanpitaja,
      Portfolio: Portfolio
    }
  
    var ChosenComponent = projects[props.projectName];
  
    return(
        {ChosenComponent} ? <><ChosenComponent /><a className="anchorLink" href="#backToNavigationAnchor">Takaisin projekteihin</a></> : <h2>Valitsemaasi projektia ei löytynyt.</h2> 
    )
}

export default Projects;
