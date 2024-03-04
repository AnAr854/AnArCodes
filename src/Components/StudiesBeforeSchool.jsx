import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function StudiesBeforeSchool (){

    return (
        <>
        <ul id="courses">
            <li><u>Kaakkois-Suomen Ammattikorkeakoulu:</u></li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Ohjelmoinnin projektiopinnot, 2op</li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Ohjelmoinnin perusteet, 5op</li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Duunaa englannin rakenteet freesiksi, 2op</li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Duunaa ruotsin rakenteet freesiksi, 2op</li>
            <li><u>Karelia-ammattikorkeakoulu:</u></li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Johdanto tietojenkäsittelyyn, 5op</li>
            <li><u>Tampereen yliopisto:</u></li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>GIT Open, 3op</li>
            <li><u>Metropolia Ammattikorkeakoulu:</u></li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Javascript-perusteet, 5op</li>
            <li><u>Aalto-yliopisto:</u></li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Data ja tieto, 2op</li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Johdatus ohjelmointiin, 2op</li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Internet ja selainohjelmointi, 2op</li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Mobiilisovellukset ja niiden luominen, 2op</li>
            <li><u>Lappeenrannan-Lahden teknillinen yliopisto:</u></li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Johdatus ohjelmointiin, 1op</li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Ohjelmointi C-kielellä, 2op</li>
            <li><u>Muut:</u></li>
            <li className="smallerText"> <AcUnitIcon style={{marginRight: "0.5em", color: "#ffdf22"}}/>Erinäisiä Udemy-, FreeCodeCamp-, Codecademy-kursseja</li>
        </ul>
        </>);
}

export default StudiesBeforeSchool;