import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const OnnenpyoraImgSource = "img/onnenpyora/";

const OnnenpyoraImgs = [{
    src: OnnenpyoraImgSource + 'aloitus.png',
    title: 'Pelin aloitusnäkymä',
    alt: 'Kuvakaappaus pelin aloitusnäkymästä',
  },
  {
    src: OnnenpyoraImgSource + 'pelitilanne.png',
    title: 'Kuva pelitilanteesta',
    alt: 'Kuvakaappaus osittain auenneesta tehtävästä pelin aikana',
  },
  {
    src: OnnenpyoraImgSource + 'ratkaistaan.png',
    title: 'Tehtävän ratkaisu',
    alt: 'Kuvakaappaus pelaajan ratkaistessa tehtävää',
  }]

function Onnenpyora (){
    return(
        <>
            {/* <h2 class="projectHeading box_shadow">Onnenpyörä</h2> */}
            <p class="projectDescription">Ensimmäisenä kouluvuonna opintoihin kuului Javaa. Koulukaverin ideasta kehitimme muutaman opiskelijan kesken Java-version klassisesta Onnenpyörä-visailusta. Lisää oppiaksemme valitsimme käyttöliitymäksi Java Swingin. Pelitoiminnallisuuden osilta koodasin vuoronvaihdot ja niihin liittyvät toiminnot ja osia pisteenlaskusta, sekä pelaajan nimen ja pisteiden näkyvyys pelatessa. Myös valitun konsonantin ja ostetun vokaalin etsintä,ohisektorin toiminnallisuudet ja ratkaisumetodi on omaa tuotantoa.</p>
            <ProjectImagesContainer imagesToAdd={OnnenpyoraImgs} />
        </>
    )
}

export default Onnenpyora;