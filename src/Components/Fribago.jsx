import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";


const fribagoImgs = [{
    src: require('../../src/img/Fribago/fribago_etusivu.png'),
    title: 'Fribagon etusivu kirjautumisen jälkeen.',
  },
  {
      src: require('../../src/img/Fribago/fribago_profiili.png'),
      title: 'Pelaajan oma profiilisivu.',
    },
    {
      src: require('../../src/img/Fribago/fribago_kaverit.png'),
      title: 'Viimeisimmässä päivityksessä lisätty vaalea teema, jonka vaihtomahdollisuuden toteutin. Oletusteeman voi valita profiilista tai teemaa voi vaihtaa nopeasti yläpalkista.',
    },
    {
        src: require('../../src/img/Fribago/fribago_vaylanpiirto.png'),
        title: 'Väyläkuvan voi lisätä kuvaamalla väylällä olevan kartan tai piirtää sivuston piirto-ohjelmalla. Kaikki leimasimet olen "piirtänyt" itse käyttäen CSS.',
      },
      {
        src: require('../../src/img/Fribago/fribago_uutisetJaPalaute.png'),
        title: 'Etusivun uutis- ja palauteosio.',
      },
      {
        src: require('../../src/img/Fribago/fribago_admin.png'),
        title: 'Sivuston adminien toiminnot.',
      }];

function Fribago (){
    return(
        <>
            <p id="jumpToContent">Suurin projekti opintojen ohessa on loppukeväällä 2023 kolmen koulukaverin kanssa aloitettu sivusto frisbeegolf tulosten kirjaamiseen ja tilastointiin. Tällä hetkellä Fribago on testausvaiheessa rajatulla käyttäjämäärällä. Projekti etenee opintojen ohessa kokoajan ja loma-aikoina vähän vauhdikkaammin. </p>
            <p>Sivuston kuvat on otettu näyttökaappauksena tietokoneen näytöltä suuremman näkymän vuoksi. Sivustossa itsessään on kiinnitetty erityistä huomiota responsiivisuuteen, koska todennäköinen käyttäjä käyttää sivustoamme mobiililaitteella. </p>
            <p>Tiimimme toimii hyvin yhteen ja kukin ottaa Jirasta tehtäviä hoitaakseen oman aikataulunsa, taitojensa tai haluamansa tekniikan harjoittelun mukaan. Ryhmämme toimiikin nykyisin hyvin monipuolisesti jokaisella osa-alueella tarvittaessa.</p>
            <p>Alla olevissa kuvissa näkyy osa toiminnoista, joiden toteutuksesta olen pääosin ollut vastuussa. Näihin osiohin kuuluu uutisosiota, admin-toimintoja, osa profiilisivua, sivustonavigoinnin toteuttamista ja esimerkiksi helppokäyttöinen väylänpiirto mahdollisuus.</p>
            <p>Tästä projektista olen saanut todella hyvää harjoitusta PHP, Javascript, JQuery, MySQL, HTML ja CSS taitoihini.</p>
            <ProjectImagesContainer imagesToAdd={fribagoImgs} />
        </>
    )
}

export default Fribago;