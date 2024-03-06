import React from "react";
import Article from "../Components/Article";

function MoreAboutMe (){

    return (
        <>
        <Article id="meNow" heading="Lyhyesti nykyhetkestä" />
        <div className="twoArticles">
            <Article id="education" heading="Koulutus" />
            <Article id="workHistory" heading="Työhistoria"/>
        </div>
        <Article id="studiesBeforeSchool" heading="Opiskelu ennen koulua"/>
        <Article id="future" heading="Mitäs nyt??"/>
        </>);
}

export default MoreAboutMe;