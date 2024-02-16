import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const kirjanpitajaImgSource = "img/Kirjanpitaja/";

const kirjanpitajaImgs = [{
    src: kirjanpitajaImgSource + 'orgValinta.png',
    title: 'Ohjelman aloitussivu kirjautumisen jälkeen',
  },
  {
    src: kirjanpitajaImgSource + 'tositesyotto.png',
    title: 'Tositteen syöttönäkymä',
  },
  {
    src: kirjanpitajaImgSource + 'tablettinakyma.png',
    title: 'Tablettinäkymä',
  }];

function Kirjanpitaja (){
    return(
        <>
            <h2 class="projectHeading">Kirjanpitäjä</h2>
            <p>Kirjanpito-ohjelma oli ensimmäinen asiakastyö opinnoissa. Saimme hyvin vapaat kädet toteutukseen ja päätimmekin tehdä mahdollisimman käyttäjäystävällisen ja selkeän version. Reilusti alle kahdessa kuukaudessa koodasimme alusta alkaen Kirjanpitäjän, jossa kaikki kuvissa näkyvät toiminnot ovat myös oikeasti toimivia. Oma osuuteni projektista oli tositteen lisäämisosion toiminnallisuus ja tallennus tietokantaan sekä ulkoasu. Responsiivisuudessa huomioin sovitusti näyttökoot tabletista 1920 x 1080 näyttökokoon, sekä Windowsin suositus skaalaus 125%, kuten ryhmän kanssa oli sovittu. Tilaaja-asiakas oli oikein tyytyväinen lopputulokseen ja saimmekin vuolaasti kehuja päätöspalaverissa!</p>
            <ProjectImagesContainer imagesToAdd={kirjanpitajaImgs} />
        </>
    )
}

export default Kirjanpitaja;