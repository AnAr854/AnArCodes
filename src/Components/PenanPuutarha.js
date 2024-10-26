import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const penanPuutarhaImgs = [{
    src: require('../../src/img/PenanPuutarha/tyontekijanHallinta.png'),
    title: 'CRUD-toiminnot',
    alt: 'Työntekijän hallintasivu kuvakaappauksena',
},
{
    src: require('../../src/img/PenanPuutarha/maaritaTyo.png'),
    title: 'Työtilauksen hallinta',
    alt: 'Työtilausten hallinta taulukko kuvakaappauksena',
}];

function PenanPuutarha() {
    return (
        <>
            <h2>Penan Puutarha</h2>
            <p>Toisen vuoden lopuksi pyöräytettiin kuvitteelliselle Penan Puutarhalle puutarhatöiden hallintasivusto. Tarkoituksena oli perehtyä back-end puoleen, joten ulkoasuun ei tässä liioin ole käytetty aikaa kuin sen verran, että sivusto on helppokäyttöinen.</p>
            <p>Asiakas voi tilata itselleen puutarhatyön, jonka Pena voi määrätä vapaalle työntekijälle ja työntekijä näkee työlistansa, sekä työkohteen paikkakunnan sään. Pena voi myös lisätä ja poistaa työntekijöitä, sekä muuttaa heidän tietojaan. Saavutettavuutta harjoiteltiin tilauslomakesivulle, joka saatiinkin täyttämään AA-luokitus.</p>
            <p>Panokseni projektiin annoin luomalla Penan hallintasivun CRUD-toiminnot alusta loppuun, työnmääräämistoiminnon sekä siihen liittyvän automaattisen sähköposti-ilmoituksen lähettämisen työntekijälle. Loin myös tietokannan projektin käyttöön, sekä siihen tarvittavat schemat. Saavutettavuudessa huolehdin siitä, että tilauslomake oli käytettävissä myös pelkän näppäimistön avulla.</p>
            <p>Projektissa kartutettuja taitoja: Node.js, Express, Handlebars, MongoDB</p>
            <ProjectImagesContainer imagesToAdd={penanPuutarhaImgs} />
        </>
    )
}

export default PenanPuutarha;