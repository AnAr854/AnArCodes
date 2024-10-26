import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";


const fribagoImgs = [{
  src: require('../../src/img/Fribago/fribago_etusivu.png'),
  title: 'Fribagon etusivu kirjautumisen jälkeen.',
  alt: "Fribago sivuston etusivu",
},
{
  src: require('../../src/img/Fribago/fribago_profiili.png'),
  title: 'Pelaajan oma profiilisivu.',
  alt: "Profiilisivu avattuna",
},
{
  src: require('../../src/img/Fribago/fribago_kaverit.png'),
  title: 'Viimeisimmässä päivityksessä lisätty vaalea teema, jonka vaihtomahdollisuuden toteutin. Oletusteeman voi valita profiilista tai teemaa voi vaihtaa nopeasti yläpalkista.',
  alt: "Kaverisivu vaalealla teemalla",
},
{
  src: require('../../src/img/Fribago/fribago_vaylanpiirto.png'),
  title: 'Väyläkuvan voi lisätä kuvaamalla väylällä olevan kartan tai piirtää sivuston piirto-ohjelmalla. Kaikki leimasimet olen "piirtänyt" itse käyttäen CSS:ää.',
  alt: "Esimerkki väyläkuvan piirtämisestä sivustolla",
},
{
  src: require('../../src/img/Fribago/fribago_uutisetJaPalaute.png'),
  title: 'Etusivun uutis- ja palauteosio.',
  alt: "Uutiset ja palauteosio näyttökaappauksena",
},
{
  src: require('../../src/img/Fribago/fribago_admin.png'),
  title: 'Sivuston adminien toiminnot.',
  alt: "Admin-osion toimintojen pääsivu",
}];

function Fribago (){
    return(
      <>
        <h2 id="jumpToContent" style={{ fontSize: '3em', fontWeight: 600, fontFamily: '"Baloo Paaji 2"', color: '#7cffd5', padding: 0 }}>FRIBAGO<span><img src={require('../../src/img//Fribago/fribago_logo.ico')} /></span></h2>
        <p>Suurin projekti opintojen ohessa on loppukeväällä 2023 kolmen koulukaverin kanssa aloitettu sivusto frisbeegolf tulosten kirjaamiseen ja tilastointiin. Tällä hetkellä Fribago on testausvaiheessa rajatulla käyttäjämäärällä. Projekti etenee opintojen ohessa kokoajan ja loma-aikoina vähän vauhdikkaammin. </p>
        <p>Sivuston kuvat on otettu näyttökaappauksena tietokoneen näytöltä suuremman näkymän vuoksi. Sivustossa itsessään on kiinnitetty erityistä huomiota responsiivisuuteen, koska todennäköinen käyttäjä käyttää sivustoamme mobiililaitteella. </p>
        <p>Tiimimme toimii hyvin yhteen ja kukin ottaa Jirasta tehtäviä hoitaakseen oman aikataulunsa, taitojensa tai haluamansa tekniikan harjoittelun mukaan. Ryhmämme toimiikin nykyisin hyvin monipuolisesti jokaisella osa-alueella tarvittaessa.</p>
        <p>Täältä pääset tutustumaan kehittäjätiimini muihin jäseniin LinkedInissä:</p>
        <ul>
          <li><a  className="fribagoTeam" href="https://www.linkedin.com/in/antti-mutanen-b72981261/" target="_blank"  rel="noreferrer">Antti Mutanen</a></li>
          <li><a className="fribagoTeam" href="https://www.linkedin.com/in/marinieminen1001101/" target="_blank"  rel="noreferrer">Mari Nieminen</a></li>
          <li><a  className="fribagoTeam" href="https://www.linkedin.com/in/eeva-arhipoff/" target="_blank"  rel="noreferrer">Eeva Arhipoff</a></li>
        </ul>
        <p>Alla olevissa kuvissa näkyy osa toiminnoista, joiden toteutuksesta olen pääosin ollut vastuussa. Näihin osiohin kuuluu uutisosiota, admin-toimintoja, osa profiilisivua, sivustonavigoinnin toteuttamista ja esimerkiksi helppokäyttöinen väylänpiirto mahdollisuus.</p>
        <p>Tästä projektista olen saanut todella hyvää harjoitusta PHP, Javascript, JQuery, MySQL, HTML ja CSS taitoihini.</p>
        <ProjectImagesContainer imagesToAdd={fribagoImgs} />
      </>
    )
}

export default Fribago;