import React from "react";
import ProjectGallery from "./ProjectGallery";

const ipaSource = "img/IPA Konevuokraamo/";
const kirjanpitajaSource = "img/Kirjanpitaja/";

const fribagoImgs = [{
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
      },
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
      }];
 
const ipaImgs = [{
          img: ipaSource + 'etusivu.png',
          title: 'Staattisen version etusivu',
        },
      {
        img: ipaSource + 'vuokraus.png',
        title: 'Vuokraamon yksittäisen tuotteen tuotesivu',
      },
        {
          img: ipaSource + 'vuokraamoEtusivuWP.png',
          title: 'WordPress-version vuokraamon pääsivu',
        },
        {
          img: ipaSource + 'poistotuotteetJaFooterWP.png',
          title: 'Poistotuotteita esittelevä galleria',
        },
        {
          img: ipaSource + 'verkkokauppaWP.png',
          title: 'WprdPress verkkokauppa',
        },
        {
          img: ipaSource + 'admin.png',
          title: 'Verkkokaupan ylläpitäjälle helposti lisäys-, poisto- ja muokkaus-toiminnot',
        }];
    const kirjanpitajaImgs = [{
          img: kirjanpitajaSource + 'orgValinta.png',
          title: 'Ohjelman aloitussivu kirjautumisen jälkeen',
        },
        {
          img: kirjanpitajaSource + 'tositesyotto.png',
          title: 'Tositteen syöttönäkymä',
        },
        {
          img: kirjanpitajaSource + 'tablettinakyma.png',
          title: 'Ohjelman tablettinäkymä',
          
        }];

function Projects(){
    return(
        <>
            <h2 class="projectHeading">Matopeli</h2>
            <p>Ensimmäisen projekti on hieman nykyaikaistettu nostalginen matopeli ja valmistui alkukeväällä 2023. (Pelataksesi klikkaa peliruutua ja ohjaa nuolinäppäimillä). Madon vauhti kasvaa asteittain. <br></br>Harjoittelun kohteena: Javascript, HTML, CSS</p>
            <iframe title="Matopeli" src="CrazyWormGameFinal/index.html" class="box_shadow"></iframe>
            <h2>Onnenpyörä</h2>
            <p>Ensimmäisenä kouluvuonna opintoihin kuului Javaa. Koulukaverin ideasta kehitimme muutaman opiskelijan kesken Java-version klassisesta Onnenpyörä-visailusta. Lisää oppiaksemme valitsimme käyttöliitymäksi Java Swingin. Pelitoiminnallisuuden osilta koodasin vuoronvaihdot ja niihin liittyvät toiminnot ja osia pisteenlaskusta, sekä pelaajan nimen ja pisteiden näkyvyys pelatessa. Myös valitun konsonantin ja ostetun vokaalin etsintä ja paljastus arvattavassa fraasissa on omaa tuotantoa. Ohisektorin toiminta myös. Ja ratkaisumetodi.  </p>
            <h2 class="projectHeading">Fribago</h2>
            <p>Suurin projekti opintojen ohessa on loppukeväällä 2023 kolmen koulukaverin kanssa aloitettu sivusto frisbeegolf tulosten kirjaamiseen ja tilastointiin. Tällä hetkellä Fribago on testausvaiheessa rajatulla käyttäjämäärällä. Sivustossa on kiinnitetty huomiota responsiivisuuteen, koska todennäköinen käyttäjä käyttää sivustoa mobiililaitteella. Projekti etenee opintojen ohessa kokoajan. <br></br>Tästä olen saanut todella hyvää harjoitusta PHP, Javascript, MySQL, HTML ja CSS taitoihini.</p>
            {/* <ProjectGallery wantedImgs={fribagoImgs}/> */}
            <h2 class="projectHeading">IPA Konevuokraamo</h2>
            <p>Koulussa ensimmäisenä vuonna ryhmissä tehty projektityö. Ensin verkkosivu tehtiin staattisena, jonka jälkeen sama verkkosivu toteutettiin Wordpressillä. Oma osuuteni ulkoasussa projektissa oli etusivu sekä myytävien ja vuokrattavien tuotteiden sivut ja yksittäisen tuotteen tuotetietosivu annetun suunnitelman mukaan, myös responsiivisena. Huolehdin lisäksi tuotteiden syöttö-, muokkaus- ja poistotoiminnoista tietokannassa admin-puolelta ja tuotteiden hakemisesta verkkokaupan käyttöön staattisessa sivustossa. Wordpressin puolella valmistin toimivan verkkokauppaosion tuotteille hakutoimintoineen. Bonuksena harjoituksen vuoksi lisäsin sivustolle "poistotuote"- gallerian Bootstrapillä. Projektissa harjoiteltua: PHP, JavaScript, MySQL, CSS, Bootstrap, ja Wordpress</p>
            <ProjectGallery wantedImgs={ipaImgs}/>
            <h2 class="projectHeading">Kirjanpitäjä</h2>
            <p>Kirjanpito-ohjelma oli ensimmäinen asiakastyö opinnoissa. Saimme hyvin vapaat kädet toteutukseen ja päätimmekin tehdä mahdollisimman käyttäjäystävällisen ja selkeän version. Reilusti alle kahdessa kuukaudessa koodasimme alusta alkaen Kirjanpitäjän, jossa kaikki kuvissa näkyvät toiminnot ovat myös oikeasti toimivia. Oma osuuteni projektista oli tositteen lisäämisosion toiminnallisuus ja tallennus tietokantaan sekä ulkoasu. Responsiivisuudessa huomioin sovitusti näyttökoot tabletista 1920 x 1080 näyttökokoon, sekä Windowsin suositus skaalaus 125%, kuten ryhmän kanssa oli sovittu. Tilaaja-asiakas oli oikein tyytyväinen lopputulokseen ja saimmekin vuolaasti kehuja päätöspalaverissa!</p>
            <ProjectGallery wantedImgs={kirjanpitajaImgs}/>
            <h2>Possupeli Unityllä</h2>
            <p>Valinnaisina opintoina tuli kokeiltua kesällä 2023 myös peliohjelmointia Unityllä. Tuotoksena kuvassa näkyvä kahden pelaajan possujen tykityspeli. Idea on varmaan jostain tuttu.. Valitettavasti itse pelitiedostoa ei enää ole, joten on tyydyttävä kaappauskuvaan.</p>
            <h2>Tämä portfolio</h2>
            <p>Tämän sivuston tarkoituksena on näyttää muutamia projektejani ja palautella mieleen Udemyssä käymääni Fullstack-kurssia ajalta ennen opiskelua alalle. Sivusto on toteutettu Reactilla, apuna käyttäen Material UI-kirjastoa. Kuten ulkoasusta huomaa, ei design-puoli ole ominta alaa, mutta pääasiassa onkin aiemmat projektit ja portfolion mahdollistaminen työnhaussa.</p>
        </>
    )
}

export default Projects;
