import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const ipaImgSource = "img/IPA Konevuokraamo/";

const ipaImgs = [{
    src: ipaImgSource + 'etusivu.png',
    title: 'Staattisen version etusivu',
  },
{
  src: ipaImgSource + 'vuokraus.png',
  title: 'Vuokraamon yksittäisen tuotteen tuotesivu',
},
  {
    src: ipaImgSource + 'vuokraamoEtusivuWP.png',
    title: 'WordPress-version vuokraamon pääsivu',
  },
  {
    src: ipaImgSource + 'poistotuotteetJaFooterWP.png',
    title: 'Poistotuotteita esittelevä galleria',
  },
  {
    src: ipaImgSource + 'verkkokauppaWP.png',
    title: 'WordPress verkkokauppa',
  },
  {
    src: ipaImgSource + 'admin.png',
    title: 'Ylläpitäjälle lisäys-, poisto- ja muokkaus-toiminnot',
  }];

function IpaKonevuokraamo (){
    return(
        <>
            <h2 class="projectHeading">IPA Konevuokraamo</h2>
            <p>Koulussa ensimmäisenä vuonna ryhmissä tehty projektityö. Ensin verkkosivu tehtiin staattisena, jonka jälkeen sama verkkosivu toteutettiin Wordpressillä. Oma osuuteni ulkoasussa projektissa oli etusivu sekä myytävien ja vuokrattavien tuotteiden sivut ja yksittäisen tuotteen tuotetietosivu annetun suunnitelman mukaan, myös responsiivisena. Huolehdin lisäksi tuotteiden syöttö-, muokkaus- ja poistotoiminnoista tietokannassa admin-puolelta ja tuotteiden hakemisesta verkkokaupan käyttöön staattisessa sivustossa. Wordpressin puolella valmistin toimivan verkkokauppaosion tuotteille hakutoimintoineen. Bonuksena harjoituksen vuoksi lisäsin sivustolle "poistotuote"- gallerian Bootstrapillä. Projektissa harjoiteltua: PHP, JavaScript, MySQL, CSS, Bootstrap, ja Wordpress</p>
            <ProjectImagesContainer imagesToAdd={ipaImgs} />
        </>
    )
}

export default IpaKonevuokraamo;