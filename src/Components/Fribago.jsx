import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const fribagoImgSource = "img/Fribago/";

const fribagoImgs = [{
    src: fribagoImgSource + 'fribago_etusivu.png',
    title: 'Breakfast',
  },
  {
      src: fribagoImgSource + 'fribago_profiili.png',
      title: 'Breakfast',
    },
    {
      src: fribagoImgSource + 'fribago_kaverit.png',
      title: 'Breakfast',
    },
    {
        src: fribagoImgSource + 'fribago_vaylanpiirto.png',
        title: 'Breakfast',
      },
      {
        src: fribagoImgSource + 'fribago_uutisetJaPalaute.png',
        title: 'Breakfast',
      },
      {
        src: fribagoImgSource + 'fribago_admin.png',
        title: 'Breakfast',
      }];

function Fribago (){
    return(
        <>
            {/* <h2 class="projectHeading box_shadow">Fribago</h2> */}
            <p class="projectDescription">Suurin projekti opintojen ohessa on loppukeväällä 2023 kolmen koulukaverin kanssa aloitettu sivusto frisbeegolf tulosten kirjaamiseen ja tilastointiin. Tällä hetkellä Fribago on testausvaiheessa rajatulla käyttäjämäärällä. Sivustossa on kiinnitetty huomiota responsiivisuuteen, koska todennäköinen käyttäjä käyttää sivustoa mobiililaitteella. Projekti etenee opintojen ohessa kokoajan. <br></br>Tästä olen saanut todella hyvää harjoitusta PHP, Javascript, MySQL, HTML ja CSS taitoihini.</p>
            <ProjectImagesContainer imagesToAdd={fribagoImgs} />
        </>
    )
}

export default Fribago;