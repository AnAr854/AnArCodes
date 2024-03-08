import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const OnnenpyoraImgs = [{
    src: require('../../src/img/onnenpyora/aloitus.png'),
    title: 'Pelin aloitusnäkymä',
    alt: 'Kuvakaappaus pelin aloitusnäkymästä',
  },
  {
    src: require('../../src/img/onnenpyora/pelitilanne.png'),
    title: 'Kuva pelitilanteesta',
    alt: 'Kuvakaappaus osittain auenneesta tehtävästä pelin aikana',
  },
  {
    src: require('../../src/img/onnenpyora/ratkaistaan.png'),
    title: 'Tehtävän ratkaisu',
    alt: 'Kuvakaappaus pelaajan ratkaistessa tehtävää',
  }]

function Onnenpyora (){
    return(
        <>
            <p>Ensimmäisenä kouluvuonna opintoihin kuului Javaa. Koulukaverin ideasta kehitimme muutaman opiskelijan kesken Java-version klassisesta Onnenpyörä-visailusta. Lisää oppiaksemme valitsimme käyttöliitymäksi Java Swingin.</p>
            <p>Pelitoiminnallisuuden osilta koodasin vuoronvaihdot ja niihin liittyvät toiminnot ja osia pisteenlaskusta, sekä pelaajan nimen ja pisteiden näkyvyyden pelatessa. Myös valitun konsonantin ja ostetun vokaalin etsintä, ohisektorin toiminnallisuudet ja ratkaisumetodi on omaa tuotantoa.</p>
            <ProjectImagesContainer imagesToAdd={OnnenpyoraImgs} />
        </>
    )
}

export default Onnenpyora;