import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const kirjanpitajaImgs = [{
    src: require('../../src/img/Kirjanpitaja/tositesyotto.png'),
    title: 'Tositteen syöttönäkymä',
    alt: 'Menotositteen syöttöikkuna kuvakaappauksena',
  },
  {
    src: require('../../src/img/Kirjanpitaja/tablettinakyma.png'),
    title: 'Tablettinäkymä',
    alt: 'Menotositteen syöttöikkuna tablettinäkymässä',
  }];

function Kirjanpitaja (){
    return(
        <>
            <h2><img src={require('../../src/img//Kirjanpitaja/kirjanpitaja_logo.png')} style={{maxWidth: "90%"}}/></h2>
            <p>Kirjanpito-ohjelma pienyritykselle oli ensimmäinen asiakastyö opinnoissa toisen vuoden alussa. Saimme hyvin vapaat kädet toteutukseen ja päätimmekin tehdä mahdollisimman käyttäjäystävällisen ja selkeän version. Reilusti alle kahdessa kuukaudessa suunnittelimme ja koodasimme alusta alkaen Kirjanpitäjän, jossa kaikki kuvissa näkyvät toiminnot ovat myös oikeasti toimivia. Tämä toteutus tehtiin seitsemän opiskelijan voimin.</p>
            <p> Oma osuuteni projektista oli tositteen lisäämisosion toiminnallisuus ja tositteen tietojen tallennus tietokantaan sekä ulkoasun toteuttaminen suunnitelman pohjalta. Responsiivisuudessa huomioin sovitusti näyttökoot tabletista näyttökokoon 1920 x 1080, sekä huomioiden myös Windowsin suositus skaalauksen (125%), kuten ryhmän kanssa oli sovittu. Tilaaja-asiakas oli oikein tyytyväinen lopputulokseen ja saimmekin vuolaasti kehuja päätöspalaverissa!</p>
            <p>Kirjanpitäjässä pääsin harjoittelemaan Scrum-kehitystä kolme sprintin ajan käyttäen Jiraa ja Confluencea, sekä vahvistamaan JavaScript, PHP, MySQL ja HTML sekä CSS-taitojani. </p>
            <ProjectImagesContainer imagesToAdd={kirjanpitajaImgs} />
        </>
    )
}

export default Kirjanpitaja;