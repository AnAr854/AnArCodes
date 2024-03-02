import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const fribagoImgSource = "img/Fribago/";

const fribagoImgs = [{
    src: fribagoImgSource + 'fribago_etusivu.png',
    title: 'Fribagon etusivu kirjautumisen jälkeen.',
  },
  {
      src: fribagoImgSource + 'fribago_profiili.png',
      title: 'Pelaajan oma profiilisivu.',
    },
    {
      src: fribagoImgSource + 'fribago_kaverit.png',
      title: 'Vaalea teema. Oletusteeman voi valita profiilista tai teemaa voi vaihtaa nopeasti yläpalkista.',
    },
    {
        src: fribagoImgSource + 'fribago_vaylanpiirto.png',
        title: 'Väyläkuvan voi lisätä kuvaamalla väylällä olevan kartan tai piirtää sivuston piirto-ohjelmalla.',
      },
      {
        src: fribagoImgSource + 'fribago_uutisetJaPalaute.png',
        title: 'Etusivun uutis- ja palauteosio.',
      },
      {
        src: fribagoImgSource + 'fribago_admin.png',
        title: 'Sivuston adminien toiminnot.',
      }];

function Fribago (){
    return(
        <>
            <p id="jumpToContent" class="projectDescription">Suurin projekti opintojen ohessa on loppukeväällä 2023 kolmen koulukaverin kanssa aloitettu sivusto frisbeegolf tulosten kirjaamiseen ja tilastointiin. Tällä hetkellä Fribago on testausvaiheessa rajatulla käyttäjämäärällä. Sivustossa on kiinnitetty huomiota responsiivisuuteen, koska todennäköinen käyttäjä käyttää sivustoa mobiililaitteella. Projekti etenee opintojen ohessa kokoajan. <br></br>Sivuston kuvat on otettu näyttökaappauksena tietokoneen näytöltä, mutta sivusto on kehitetty eritoten mobiililaitekäyttöön, koska suurin osa tulevista käyttäjistä tulee käyttämään sivustoa mobiililaitteella radalla ollessaan.<br></br>Alla olevissa kuvissa näkyy toimintoja, joiden toteutuksesta olen pääosin ollut vastuussa. Ryhmämme toimii nykyisin hyvin monipuolisesti vähän jokaisella osa-alueella, joten tästä olen saanut todella hyvää harjoitusta PHP, Javascript, MySQL, HTML ja CSS taitoihini.</p>
            <ProjectImagesContainer imagesToAdd={fribagoImgs} />
        </>
    )
}

export default Fribago;