import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const OnnenpyoraImgSource = "img/onnenpyora/";

const OnnenpyoraImgs = [{
    src: OnnenpyoraImgSource + 'aloitus.png',
    title: 'Pelin aloitusnäkymä',
  },
  {
    src: OnnenpyoraImgSource + 'pelitilanne.png',
    title: 'Kuva pelitilanteesta',
  },
  {
    src: OnnenpyoraImgSource + 'ratkaistaan.png',
    title: 'Tehtävän ratkaisu',
  }]

function Onnenpyora (){
    return(
        <>
            <h2 class="projectHeading">Onnenpyörä</h2>
            <p>Ensimmäisenä kouluvuonna opintoihin kuului Javaa. Koulukaverin ideasta kehitimme muutaman opiskelijan kesken Java-version klassisesta Onnenpyörä-visailusta. Lisää oppiaksemme valitsimme käyttöliitymäksi Java Swingin. Pelitoiminnallisuuden osilta koodasin vuoronvaihdot ja niihin liittyvät toiminnot ja osia pisteenlaskusta, sekä pelaajan nimen ja pisteiden näkyvyys pelatessa. Myös valitun konsonantin ja ostetun vokaalin etsintä,ohisektorin toiminnallisuudet ja ratkaisumetodi on omaa tuotantoa.</p>
            <ProjectImagesContainer imagesToAdd={OnnenpyoraImgs} />
        </>
    )
}

export default Onnenpyora;