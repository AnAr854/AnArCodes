import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const ipaImgSource = "img/IPA Konevuokraamo/";

const ipaImgs = [{
    src: ipaImgSource + 'etusivu.png',
    title: 'Staattisen version etusivu',
    alt: 'Kuvakaappaus konevuokraamon etusivusta',
  },
{
  src: ipaImgSource + 'vuokraus.png',
  title: 'Vuokraamon yksittäisen tuotteen tuotesivu',
  alt: 'Puutyökalujen vuokraussivun malli',
},
  {
    src: ipaImgSource + 'vuokraamoEtusivuWP.png',
    title: 'WordPress-version vuokraamon pääsivu',
    alt: 'Kuvakaappaus vuokrauspuolen etusivusta',
  },
  {
    src: ipaImgSource + 'poistotuotteetJaFooterWP.png',
    title: 'Poistotuotteita esittelevä galleria',
    alt: 'Kuvakaappaus footerin yllä olevasta poistotuote sliderista',
  },
  {
    src: ipaImgSource + 'verkkokauppaWP.png',
    title: 'WordPress verkkokauppa',
    alt: 'Kuvakaappaus verkkokaupan hakutoiminnosta',
  },
  {
    src: ipaImgSource + 'admin.png',
    title: 'Ylläpitäjälle lisäys-, poisto- ja muokkaus-toiminnot',
    alt: 'Kuvakaappaus ylläpitäjän lisää-tuote osiosta',
  }];

function IpaKonevuokraamo (){
    return(
        <>
            <p>Koulussa ensimmäisenä vuonna ryhmissä tehty projektityö. Ensin verkkosivu tehtiin staattisena, jonka jälkeen sama verkkosivu toteutettiin Wordpressillä.</p>
            <p>Oma osuuteni projektissa oli etusivun, myytävien ja vuokrattavien tuotteiden sivujen sekä yksittäisen tuotteen tuotetietosivujen ulkoasut annetun suunnitelman mukaan, myös responsiivisena. Toteutin myös näille sivuille kuuluvat toiminnallisuudet.</p>
            <p>Huolehdin lisäksi tuotteiden syöttö-, muokkaus- ja poistotoiminnoista tietokannassa admin-puolelta ja tuotteiden hakemisesta verkkokaupan käyttöön staattisessa sivustossa. Wordpressin puolella valmistin toimivan verkkokauppaosion tuotteille hakutoimintoineen. Bonuksena harjoituksen vuoksi lisäsin sivustolle "poistotuote"- gallerian Bootstrapillä.</p>
            <p>Projektissa harjoiteltua: PHP, JavaScript, MySQL, CSS, Bootstrap-kirjasto, Figma ja Wordpress</p>
            <ProjectImagesContainer imagesToAdd={ipaImgs} />
        </>
    )
}

export default IpaKonevuokraamo;