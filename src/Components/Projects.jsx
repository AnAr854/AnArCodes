import React from "react";
import ProjectGallery from "./ProjectGallery";

const ipaSource = "img/IPA Konevuokraamo/";
const kirjanpitajaSource = "img/Kirjanpitaja/";

const fribagoImgs = [{
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
      },
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
      }];
 
const ipaImgs = [{
          img: ipaSource + 'etusivu.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
      {
        img: ipaSource + 'vuokraus.png',
        title: 'Breakfast',
        author: '@bkristastucchio',
      },
      {
          img: ipaSource + 'tuotesivu.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: ipaSource + 'yksituote.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: ipaSource + 'vuokraamoEtusivuWP.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: ipaSource + 'poistotuotteetJaFooterWP.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: ipaSource + 'verkkokauppaWP.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: ipaSource + 'admin.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        }];
    const kirjanpitajaImgs = [{
          img: kirjanpitajaSource + 'orgValinta.png',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
            img: kirjanpitajaSource + 'tositesyotto.png',
            title: 'Breakfast',
            author: '@bkristastucchio',
          },
          {
            img: kirjanpitajaSource + 'tablettinakyma.png',
            title: 'Breakfast',
            author: '@bkristastucchio',
          }];

function Projects(){
    return(
        <>
            <h2 class="projectHeading">Matopeli</h2>
            <p>Ensimmäisen projekti on hieman nykyiaikaistettu nostalginen matopeli ja valmistui alkukeväällä 2023. (Pelataksesi klikkaa peliruutua ja ohjaa nuolinäppäimillä). Madon vauhti kasvaa asteittain. <br></br>Harjoittelun kohteena: Javascript, HTML, CSS</p>
            <iframe title="Matopeli" src="CrazyWormGameFinal/index.html" class="box_shadow"></iframe>
            <h2 class="projectHeading">Fribago</h2>
            <p>Suurin projekti opintojen ohessa on loppukeväällä 2023 kolmen koulukaverin kanssa aloitettu sivusto frisbeegolf tulosten kirjaamiseen ja tilastointiin. Tällä hetkellä Fribago on testausvaiheessa rajatulla käyttäjämäärällä. Sivustossa on kiinnitetty huomiota responsiivisuuteen, koska todennäköinen käyttäjä käyttää sivustoa mobiililaitteella. Projekti etenee opintojen ohessa kokoajan. <br></br>Tästä olen saanut todella hyvää harjoitusta PHP, Javascript, MySQL, HTML ja CSS taitoihini.</p>
            <ProjectGallery wantedImgs={fribagoImgs}/>
            <h2 class="projectHeading">IPA Konevuokraamo</h2>
            <p>Koulussa ensimmäisenä vuonna tehty projekti. Ensin verkkosivu tehtiin staattisena, jonka jälkeen sama verkkosivu muutettiin Wordpress-sivuksi. Tietokantoja harjoiteltiin lisäämällä kirjautumismahdollisuus ja tuotteet tallennettiin myös tietokantaan. </p>
            <ProjectGallery wantedImgs={ipaImgs}/>
            <h2 class="projectHeading">Kirjanpitäjä</h2>
            <p>Kirjanpito-ohjelma oli ensimmäinen asiakastyö. Saimme hyvin vapaat kädet toteutukseen ja päätimmekin tehdä mahdollisimman käyttäystävällisen ja selkeän version. Reilusti alle kahdessa kuukaudessa koodasimme alusta alkaen Kirjanpitäjän, jossa kaikki kuvissa näkyvät toiminnot ovat myös oikeasti toimivia. Oma osuuteni projektista oli tositteen lisäämisosion toiminnallisuus ja tallennus tietokantaan sekä ulkoasu. Responsiivisuudessa huomioin sovitusti näyttökoot tabletista 1920 x 1080 näyttökokoon, sekä Windowsin suositus skaalaus 125%.</p>
            <ProjectGallery wantedImgs={kirjanpitajaImgs}/>
        </>
    )
}

export default Projects;
