import React from "react";

function Matopeli() {
    if (window.innerWidth >= 1024) {
        return (
            <>
                <h2 id="jumpToContent" style={{ fontWeight: 600, fontFamily: 'Honk', letterSpacing: '4px', fontSize: "3em" }}>MATOPELI</h2>
                <p>Ensimmäinen oma projekti oli nostalginen matopeli värillisenä ja valmistui alkukeväällä 2023. (Pelataksesi klikkaa peliruutua ja ohjaa nuolinäppäimillä). Madon vauhti kasvaa asteittain.</p><p>Harjoittelun kohteena: Javascript, HTML, CSS</p>
                <iframe title="Matopeli" src={`${process.env.PUBLIC_URL}/CrazyWormGameFinal/index.html`}></iframe>
                <p>Pelin repositorion löydät täältä: <a className="githubLink" href="https://github.com/AnAr854/WormGame" target="_blank" rel="noreferrer">Matopelin repositorio</a></p>
            </>
        )
    } else if (window.innerWidth < 1024) {
        return (
            <>
                <h2 id="jumpToContent" style={{ fontWeight: 600, fontFamily: 'Honk', letterSpacing: '2px' }}>MATOPELI</h2>
                <p>Ensimmäinen oma projekti oli nostalginen matopeli värillisenä ja valmistui alkukeväällä 2023. Peliä voi kokeilla tietokoneen näppäimistöllä, yli 1024px:iä leveillä näytöillä.</p><p>Harjoittelun kohteena: Javascript, HTML, CSS</p>
                <img src={require('../../src/img/wormGameImg.png')} id="wormGameImg" className="box_shadow" alt="gameplay" />
                <p>Pelin repositorion löydät täältä: <a className="githubLink" href="https://github.com/AnAr854/WormGame" target="_blank" rel="noreferrer">Matopelin repositorio</a></p>
            </>
        )
    }
}

export default Matopeli;