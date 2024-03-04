import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const kirjanpitajaImgSource = "img/Kirjanpitaja/";

const kirjanpitajaImgs = [{
    src: kirjanpitajaImgSource + 'orgValinta.png',
    title: 'Ohjelman aloitussivu kirjautumisen jälkeen',
    alt: 'Kuvakaappaus organissation valinnasta kirjautumisen jälkeen',
  },
  {
    src: kirjanpitajaImgSource + 'tositesyotto.png',
    title: 'Tositteen syöttönäkymä',
    alt: 'Menotositteen syöttöikkuna kuvakaappauksena',
  },
  {
    src: kirjanpitajaImgSource + 'tablettinakyma.png',
    title: 'Tablettinäkymä',
    alt: 'Menotositteen syöttöikkuna tablettinäkymässä',
  }];

function Kirjanpitaja (){
    return(
        <>
            <p class="projectDescription">Kirjanpito-ohjelma oli ensimmäinen asiakastyö opinnoissa. Saimme hyvin vapaat kädet toteutukseen ja päätimmekin tehdä mahdollisimman käyttäjäystävällisen ja selkeän version. Reilusti alle kahdessa kuukaudessa koodasimme alusta alkaen Kirjanpitäjän, jossa kaikki kuvissa näkyvät toiminnot ovat myös oikeasti toimivia.</p>
            <p> Oma osuuteni projektista oli tositteen lisäämisosion toiminnallisuus ja tositteen tietojen tallennus tietokantaan sekä ulkoasun toteuttaminen suunnitelman pohjalta. Responsiivisuudessa huomioin sovitusti näyttökoot tabletista näyttökokoon 1920 x 1080, sekä huomioiden myös Windowsin suositus skaalauksen (125%), kuten ryhmän kanssa oli sovittu. Tilaaja-asiakas oli oikein tyytyväinen lopputulokseen ja saimmekin vuolaasti kehuja päätöspalaverissa!</p>
            <ProjectImagesContainer imagesToAdd={kirjanpitajaImgs} />
        </>
    )
}

export default Kirjanpitaja;