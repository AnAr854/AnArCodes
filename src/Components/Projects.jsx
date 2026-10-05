import React from 'react';
import Matopeli from "./Matopeli";
import Onnenpyora from "./Onnenpyora";
import Fribago from "./Fribago";
import IpaKonevuokraamo from "./IpaKonevuokraamo";
import Kirjanpitaja from "./Kirjanpitaja";
import Portfolio from "./Portfolio";
import PenanPuutarha from './PenanPuutarha';
import Fribamap from './Fribamap';
import Oppari from './Oppari';
import FamilyCalendar from './FamilyCalendar';


function Projects(props) {

  const projects = {
    Matopeli: Matopeli,
    Onnenpyora: Onnenpyora,
    Fribago: Fribago,
    IpaKonevuokraamo: IpaKonevuokraamo,
    Kirjanpitaja: Kirjanpitaja,
    Portfolio: Portfolio,
    PenanPuutarha: PenanPuutarha,
    Fribamap: Fribamap,
    Oppari: Oppari,
    FamilyCalendar: FamilyCalendar
  }

  var ChosenComponent = projects[props.projectName];

  return (
    ChosenComponent ? <ChosenComponent /> : <h2>Valitsemaasi projektia ei löytynyt.</h2>
  )
}

export default Projects;
