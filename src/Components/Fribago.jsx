import React from "react";

const fribagoImgSource = "img/";

const fribagoImgs = [{
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    }];

function Fribago (){
    return(
        <>
            <h2 class="projectHeading box_shadow">Fribago</h2>
            <p class="projectDescription">Suurin projekti opintojen ohessa on loppukeväällä 2023 kolmen koulukaverin kanssa aloitettu sivusto frisbeegolf tulosten kirjaamiseen ja tilastointiin. Tällä hetkellä Fribago on testausvaiheessa rajatulla käyttäjämäärällä. Sivustossa on kiinnitetty huomiota responsiivisuuteen, koska todennäköinen käyttäjä käyttää sivustoa mobiililaitteella. Projekti etenee opintojen ohessa kokoajan. <br></br>Tästä olen saanut todella hyvää harjoitusta PHP, Javascript, MySQL, HTML ja CSS taitoihini.</p>
            {/* <ProjectImagesContainer imagesToAdd={fribagoImgs} /> */}
        </>
    )
}

export default Fribago;