import React from "react";
import Article from "../Components/Article";

function MoreAboutMe (){

    return (
        <>
        <article className="box_shadow">
            <h1>Lyhyesti nykyhetkestä</h1>
            <p>Tällä hetkellä opiskelen tietojenkäsittelyä Hämeen ammattikorkeakoulussa. Yleisiä opintoja on kasassa Toukokuussa 2024 juuri ja juuri alle 130 opintopistettä, joten opinnot teorian osalta alkaa olla loppusuoralla. Ensi syksynä jäljellä olisi enää jäljellä vähän teoriaa, joten sen suorittaminen onnistuisi harjoittelun ohessa. Parhaillaan etsinkin harjoittelupaikkaa syksyksi 2024, ajankohdan suhteen olen kuitenkin joustava. </p>
            <p>Työskentelen parhaillaan täysipäiväisesti opintojen ohessa teollisuudessa ja tarkoituksena on suorittaa alanvaihto kohti unelma-ammattiani koodaajana mahdollisimman pian.</p>
        </article>
        <Article id="education" heading="Koulutus" />
        <Article id="workHistory" heading="Työhistoria"/>
        <Article id="studiesBeforeSchool" heading="Opiskelu ennen koulua"/>
        <Article id="studiesInSchool" heading="Koulussa opittua"/>
        </>);
}

export default MoreAboutMe;