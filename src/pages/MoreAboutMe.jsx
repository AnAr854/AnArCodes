import React from "react";
import Article from "../Components/Article";

function MoreAboutMe (){

    return (
        <>
        <article className="box_shadow">
            <h1>Lyhyesti nykyhetkestä</h1>
            <p className="smallerText">Kipinä koodaamiseen syttyi sattumalta vuonna 2019, ja siitä lähtien palo on vain yltynyt. Itsensä haastaminen, uuden opettelu ja ongelmien ratkominen on juuri tällaiselle jatkuvia haasteita kaipaavalle tarkoitettua. Koodaaminen on välillä hermoja raastavaa, mutta se tunne joka tulee onnistumisesta, on todellakin sen arvoinen!</p>
            <p className="smallerText">Tällä hetkellä opiskelen tietojenkäsittelyä Hämeen ammattikorkeakoulussa. Yleisiä opintoja on kasassa Toukokuussa 2024 juuri ja juuri alle 130 opintopistettä, joten opinnot teorian osalta alkaa olla loppusuoralla. Ensi syksynä jäljellä olisi enää hieman teoriaa, joten sen suorittaminen onnistuisi harjoittelun ohessa. Parhaillaan etsinkin harjoittelupaikkaa syksyksi 2024, ajankohdan suhteen olen kuitenkin joustava. </p>
            <p className="smallerText">Työskentelen parhaillaan täysipäiväisesti opintojen ohessa teollisuudessa ja tarkoituksena on suorittaa alanvaihto kohti unelma-ammattiani koodaajana mahdollisimman pian.</p>
        </article>
        <div className="twoArticles">
            <Article id="education" heading="Koulutus" />
            <Article id="workHistory" heading="Työhistoria"/>
        </div>
        <Article id="studiesBeforeSchool" heading="Opiskelu ennen koulua"/>
        <Article id="future" heading="Mitäs nyt??"/>
        </>);
}

export default MoreAboutMe;