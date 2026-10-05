import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";


const famCalImgs = [{
    src: require('../../src/img/FamilyCalendar/paanakyma.jpg'),
    title: 'Perhekalenterin päänäkymä.',
    alt: "Päänäkymä avattuna",
},
{
    src: require('../../src/img/FamilyCalendar/statuksenVaihto.png'),
    title: 'Päivittäisen näkymän statuksen vaihtaminen.',
    alt: "Statuksen vaihtaminen avattuna",
},
{
    src: require('../../src/img/FamilyCalendar/adminToiminnot.png'),
    title: 'Pääkäyttäjän toiminnot.',
    alt: "Pääkäyttäjän toimintolista avattuna",
}];

function FamilyCalendar() {
    return (
        <>
            <h2 id="jumpToContent" style={{ fontSize: '3em', fontWeight: 600, fontFamily: '"Noto Serif Khojki", serif', color: 'teal', padding: 0 }}>FamilyCalendar</h2>
            <div className="projectIntro">
                <div className="projectDescription">
                    <p>Halusin tehdä oman kalenterin, joka ei näytä tyhjiä päiviä vaan hyvin nopealla vilkaisulla näen perheenjäsenten tämän päivän aikataulun, sekä onko jotain tapahtumia tulossa seuraavan viikon aikana.</p>
                    <p>Lasten lukujärjestykset on tuotu sovellukseen Wilmasta ladatusta iCal-tiedostosta ja sovellus lisää automaattisesti muistutuksen uusia vanhentuva lukkari. Vanhempien päivittäisstatus lisätään käsin parilla napin painalluksella.</p>
                    <p>Sovellus on luotu yhteistyössä parityöskentelynä sisareni kanssa. Hän käytti apulaisena Github Copilotia ja minä Claude Codea. Sovellus julkaistiin Firebasessa ja sovelluksen data on tallessa Firestoressa.</p>
                    <p>Tässä projektissa olen syventänyt taitojani tekoälyohjelmoinnissa, sekä oppinut uutta Firebasen ja Firestoren merkeissä.</p>
                </div>
            </div>
            <ProjectImagesContainer imagesToAdd={famCalImgs} carousel />
        </>
    )
}

export default FamilyCalendar;