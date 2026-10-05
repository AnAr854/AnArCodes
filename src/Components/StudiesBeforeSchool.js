import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function StudiesBeforeSchool (){

    return (
        <>
        <ul id="courses">
            <li><strong className="schoolName">Kaakkois-Suomen Ammattikorkeakoulu:</strong></li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Ohjelmoinnin projektiopinnot, 2op</li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Ohjelmoinnin perusteet, 5op</li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Duunaa englannin rakenteet freesiksi, 2op</li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Duunaa ruotsin rakenteet freesiksi, 2op</li>
            <li><strong className="schoolName">Karelia-ammattikorkeakoulu:</strong></li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Johdanto tietojenkäsittelyyn, 5op</li>
            <li><strong className="schoolName">Tampereen yliopisto:</strong></li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>GIT Open, 3op</li>
            <li><strong className="schoolName">Metropolia Ammattikorkeakoulu:</strong></li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Javascript-perusteet, 5op</li>
            <li><strong className="schoolName">Aalto-yliopisto:</strong></li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Data ja tieto, 2op</li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Johdatus ohjelmointiin, 2op</li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Internet ja selainohjelmointi, 2op</li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Mobiilisovellukset ja niiden luominen, 2op</li>
            <li><strong className="schoolName">Lappeenrannan-Lahden teknillinen yliopisto:</strong></li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Johdatus ohjelmointiin, 1op</li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Ohjelmointi C-kielellä, 2op</li>
            <li><strong className="schoolName">Muut:</strong></li>
            <li> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Erinäisiä Udemy-, FreeCodeCamp-, Codecademy-kursseja</li>
        </ul>
        </>);
}

export default StudiesBeforeSchool;