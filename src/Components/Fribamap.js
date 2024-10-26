import React from "react";
import ProjectImagesContainer from "./ProjectImagesContainer";


const fribamapImgs = [{
    src: require('../../src/img/FribaMap/instructions.png'),
    title: 'FribaMap ohjesivu.',
    alt: "Fribamap ohjesivun alkuosa",
    isMobileImg: true
},
{
    src: require('../../src/img/FribaMap/profilepage.png'),
    title: 'Pelaajan oma profiilisivu.',
    alt: "Profiilisivun alkuosa, jossa näkyy pelaajan tiedot",
    isMobileImg: true
},
{
    src: require('../../src/img/FribaMap/throwStats.png'),
    title: 'Ensimmäisten heittojen pituusjakauma',
    alt: "Profiilisivun lopussa oleva piirakkakaavio heittojen jakaumasta",
    isMobileImg: true
},
{
    src: require('../../src/img/FribaMap/mapView.png'),
    title: 'Karttanäkymä. Jos tietokannasta löytyy tiin ja korin sijainnit, ne näkyvät kartalla. Jos tietokannassa ei vielä koordinaatteja ole, voidaan ne tallentaa sinne napin painalluksella.',
    alt: "Karttanäkymä, jossa näkyy tiin, korin ja pelaajan sijainnit.",
    isMobileImg: true

}];

function Fribamap() {
    return (
        <>
            <h2 id="jumpToContent" style={{ fontSize: '3em', fontWeight: 600, fontFamily: '"Baloo Paaji 2"', color: '#7cffd5', padding: 0 }}>FribaMap</h2>
            <p>Koulutukseni mobiilikehitysmoduulissa päätettiin tekaista lisäosa FribaGoon React-Nativella.</p>
            <p>Projektissa osuuteni keskittyi sovelluksen navigaation toteuttamiseen, profiilinäkymän luontiin ja sen vaatimien tietokantahakujen tekemiseen, sisältäen myös profiilin päivitysmahdollisuuden. Myös custom-markerit on minun toteuttamat, mutta lyhyen projektiajan vuoksi keskityin enemmän sen toimintaan saattamiseen, kuin ulkonäköön. Nyt ne kuitenkin on helposti jatkossa vaihdettavissa parempiin merkkeihin.</p>
            <p>Tästä projektista olen saanut todella hyvää harjoitusta React Nativesta, Android Studiosta ja Github-haaroista</p>
            <ProjectImagesContainer imagesToAdd={fribamapImgs} />
        </>
    )
}

export default Fribamap;