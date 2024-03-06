import React from "react";
import { Link, useLocation } from "react-router-dom";

function Me(){
    let linkInHeader = "";
    let url = useLocation().pathname;

    if(url.includes("more")){
        linkInHeader = <Link to="/">Takaisin projekteihin . . .  </Link>;
    }else{
        linkInHeader = <Link to="/moreAboutMe">Lisää minusta . . .  </Link>;
    };
    
    return(
        <>
        <img src="img/ilmanTaustaa2.png" id="mainPortrait" alt="self portrait"/>
        <div id="headerTexts">
            <h1>Anne Arhipoff</h1>
            <h2>Innokas koodariopiskelija Suomussalmelta.</h2>
            {linkInHeader}
        </div>
        </>
    )
}

export default Me;

