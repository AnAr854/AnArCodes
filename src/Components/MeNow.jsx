import React from "react";
import SkillsAside from "./SkillsAside";

function MeNow() {
    return (
        <div className="aboutMeLayout">
            <div className="aboutMeText">
                <p>Kipinä koodaamiseen syttyi sattumalta vuonna 2019, ja siitä lähtien palo on vain yltynyt. Itsensä haastaminen, uuden opetteleminen ja ongelmien ratkominen on tällaiselle jatkuvia haasteita kaipaavalle tarkoitettua. Koodaaminen on välillä hermoja raastavaa, mutta se tunne joka tulee onnistumisesta, on todellakin sen arvoinen!</p>
                <p>Olen valmistunut tammikuussa 2026 tietojenkäsittelyn tradenomiksi Hämeen ammattikorkeakoulusta. Opiskeluni hoidin erittäin mallikkaasti päivätyön ohessa etänä, keskiarvolla 4.8.</p>
                <p>Pitkä urani teollisuudessa on tuonut minulle valtavasti toimialakokemusta teollisuudesta ja etenkin siitä, miten "lattiatason" työskentely toimii ja kuinka järjestelmät vaikuttavat päivittäiseen työntekoon. Yksi mahdollisuus uudelle uralle olisikin työ, jossa voisin tuoda kokemukseni uuden työnantajani käyttöön.Työssäni käytän päivittäin MES-järjestelmää ja ajoittain teen tuotantosuunnitelmia ERP-järjestelmässä.</p>
                <p>Etsin kuumeisesti suuntaa uralleni, jossa pääsisin hyödyntämään tietojani ja taitojani, sekä kehittymään alan rautaiseksi ammattilaiseksi. Tällä hetkellä syvennyn tekoälykehitykseen web-kehityksessä (Sivuston viimeisin päivitys), sekä datan käsittelyssä omassa taloudenhallinnassa ja teollisuuden koneiden ajosuunnitelman kehittämisessä.</p>

                <p>Päivitetty 5.10.2026</p>
            </div>
            <SkillsAside />
        </div>
    );
}

export default MeNow;