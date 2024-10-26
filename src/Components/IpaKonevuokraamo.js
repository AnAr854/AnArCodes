import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const ipaImgs = [{
    src: require('../../src/img/IPA Konevuokraamo/etusivu.png'),
    title: 'Staattisen version etusivu',
    alt: 'Kuvakaappaus konevuokraamon etusivusta',
  },
{
  src: require('../../src/img/IPA Konevuokraamo/vuokraus.png'),
  title: 'Vuokraamon yksittäisen tuotteen tuotesivu',
  alt: 'Puutyökalujen vuokraussivun malli',
},
  {
    src: require('../../src/img/IPA Konevuokraamo/vuokraamoEtusivuWP.png'),
    title: 'WordPress-version vuokraamon pääsivu',
    alt: 'Kuvakaappaus vuokrauspuolen etusivusta',
  },
  {
    src: require('../../src/img/IPA Konevuokraamo/poistotuotteetJaFooterWP.png'),
    title: 'Poistotuotteita esittelevä galleria',
    alt: 'Kuvakaappaus footerin yllä olevasta poistotuote sliderista',
  },
  {
    src: require('../../src/img/IPA Konevuokraamo/verkkokauppaWP.png'),
    title: 'WordPress verkkokauppa',
    alt: 'Kuvakaappaus verkkokaupan hakutoiminnosta',
  },
  {
    src: require('../../src/img/IPA Konevuokraamo/admin.png'),
    title: 'Ylläpitäjälle lisäys-, poisto- ja muokkaus-toiminnot',
    alt: 'Kuvakaappaus ylläpitäjän lisää-tuote osiosta',
  }];

function IpaKonevuokraamo (){
    return(
        <>
            <h2 id="jumpToContent" className="longText" style={{ fontWeight: 600, color: "#fb9d10", textShadow: "1px 1px 2px black", fontFamily: "Quantico", fontSize:"3em" }}>IPA KONEVUOKRAAMO</h2>
            <p>Koulussa ensimmäisenä vuonna ryhmissä tehty projektityö. Ensin verkkosivu tehtiin staattisena, jonka jälkeen sama verkkosivu toteutettiin Wordpressillä.</p>
            <p>Oma osuuteni projektissa oli etusivun, myytävien ja vuokrattavien tuotteiden sivujen sekä yksittäisen tuotteen tuotetietosivujen ulkoasut annetun suunnitelman mukaan, myös responsiivisena. Toteutin myös näille sivuille kuuluvat toiminnallisuudet.</p>
            <p>Huolehdin lisäksi tuotteiden syöttö-, muokkaus- ja poistotoiminnoista tietokannassa admin-puolelta ja tuotteiden hakemisesta verkkokaupan käyttöön staattisessa sivustossa. Wordpressin puolella valmistin toimivan verkkokauppaosion tuotteille hakutoimintoineen. Bonuksena harjoituksen vuoksi lisäsin sivustolle "poistotuote"- gallerian Bootstrapillä.</p>
            <p>Projektissa harjoiteltua: PHP, JavaScript, MySQL, CSS, Bootstrap-kirjasto, Figma ja Wordpress</p>
            <ProjectImagesContainer imagesToAdd={ipaImgs} />
        </>
    )
}

export default IpaKonevuokraamo;