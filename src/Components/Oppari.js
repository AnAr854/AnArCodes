import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";

const oppariImgs = [
    {
        src: require('../../src/img/Oppari/leimausnaytto.png'),
        title: 'Työntekijän leimausnäyttö.',
        alt: 'Leimausnäyttö työkohtaisin valintapainikkein ja sisään/ulos, sekä työnvaihdon aloitus- ja lopetuspainikkein.',
    }, {
        src: require('../../src/img/Oppari/tyontekijanLeimaukset.png'),
        title: 'Leimausten korjausnäkymä.',
        alt: 'Leimaukset riveittäin tietoineen ja niihin yhdistetyt korjaus- ja poistopainikkeet..',
    }, {
        src: require('../../src/img/Oppari/visualizerTaulut.png'),
        title: 'Tietokannan rakenne.',
        alt: 'Tietokannan taulujen yhteydet ja sisällöt graafisena piirroksena.',
    }, {
        src: require('../../src/img/Oppari/pdfOsa1.png'),
        title: 'PDF-tuntiraportin 1. sivu.',
        alt: 'Kuukauden jokainen leimaus riveittäin esitettynä PDF-tiedostossa.',
    }, {
        src: require('../../src/img/Oppari/pdfOsa2.png'),
        title: 'PDF-tuntiraportin 2. sivu.',
        alt: 'Kuukauden yhteenveto palkkaluokittain ja niiin eriteltyine tunteineen.',
    }];

function Oppari() {
    return (
        <>
            <h2>Opinnäytetyö 2025</h2>
            <p>Opinnäytetyössäni valmistin mallisovelluksen leimaustyyppiseen työaikakirjaamiseen pienille yrityksille.</p>
            <p>Sovellus valmistui hyvin käyttökelpoisena versiona, josta pystyisi pienin muokkauksin tukemaan erilaisten yritysten tarpeita. Tärkeimpänä puutteena sovelluksessa on validointien puute ja tietokannan varmuuskopioinnin puute.</p>
            <p>Opinnäytetyöni suorittamiseen käytin seuraavia ohjelmistoja/teknologioita: Figma, pgAdmin, PostgreSQL, JavaScript, Node.js, Express.js, PDFKit, EJS, HTML, CSS, Trello </p>
            <p>Koko opinnäytetyö löytyy julkaistuna <a href="https://urn.fi/URN:NBN:fi:amk-2025090424423" target="blank" class="theseusLink ">Theseuksesta.</a></p>
            <ProjectImagesContainer imagesToAdd={oppariImgs} />
        </>
    )
}

export default Oppari;