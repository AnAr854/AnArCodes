import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const kirjanpitajaImgs = [{
    src: new URL('../../src/img/Kirjanpitaja/tositesyotto.png', import.meta.url).href,
    title: 'Tositteen syöttönäkymä',
    alt: 'Menotositteen syöttöikkuna kuvakaappauksena',
},
{
    src: new URL('../../src/img/Kirjanpitaja/tablettinakyma.png', import.meta.url).href,
    title: 'Tablettinäkymä',
    alt: 'Menotositteen syöttöikkuna tablettinäkymässä',
}];

function Kirjanpitaja() {
    return (
        <>
            <h2><img alt="Kirjanpitäjä logo" src={new URL('../../src/img//Kirjanpitaja/kirjanpitaja_logo.png', import.meta.url).href} style={{ maxWidth: "90%" }} /></h2>
            <div className="projectDescription">
                <p>Kirjanpito-ohjelma pienyritykselle oli ensimmäinen asiakastyö opinnoissa toisen vuoden alussa. Saimme hyvin vapaat kädet toteutukseen ja päätimmekin tehdä mahdollisimman käyttäjäystävällisen ja selkeän version. Reilusti alle kahdessa kuukaudessa suunnittelimme ja koodasimme alusta alkaen Kirjanpitäjän, jossa kaikki kuvissa näkyvät toiminnot ovat myös oikeasti toimivia. Tämä toteutus tehtiin seitsemän opiskelijan voimin.</p>
                <p> Oma osuuteni projektista oli tositteen lisäämisosion toiminnallisuus ja tositteen tietojen tallennus tietokantaan sekä ulkoasun toteuttaminen suunnitelman pohjalta. Responsiivisuudessa huomioin sovitusti näyttökoot tabletista näyttökokoon 1920 x 1080, sekä huomioiden myös Windowsin suositus skaalauksen (125%), kuten ryhmän kanssa oli sovittu. Tilaaja-asiakas oli oikein tyytyväinen lopputulokseen ja saimmekin vuolaasti kehuja päätöspalaverissa!</p>
                <p>Kirjanpitäjässä pääsin harjoittelemaan Scrum-kehitystä kolme sprintin ajan käyttäen Jiraa ja Confluencea, sekä vahvistamaan JavaScript, PHP, MySQL ja HTML sekä CSS-taitojani. </p>
            </div>
            <ProjectImagesContainer imagesToAdd={kirjanpitajaImgs} carousel />
        </>
    )
}

export default Kirjanpitaja;