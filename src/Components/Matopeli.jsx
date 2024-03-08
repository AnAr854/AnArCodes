import React from "react";

function Matopeli (){
    if(window.innerWidth >= 1024){
        return(
            <>
                <p>Ensimmäinen oma projekti oli nostalginen matopeli värillisenä ja valmistui alkukeväällä 2023. (Pelataksesi klikkaa peliruutua ja ohjaa nuolinäppäimillä). Madon vauhti kasvaa asteittain.</p><p>Harjoittelun kohteena: Javascript, HTML, CSS</p>
                <iframe title="Matopeli" src={`${process.env.PUBLIC_URL}/CrazyWormGameFinal/index.html`}></iframe>
            </>
        )
    }else if (window.innerWidth < 1024){
        return (
            <>
            <p>Ensimmäinen oma projekti oli nostalginen matopeli värillisenä ja valmistui alkukeväällä 2023. Peliä voi kokeilla tietokoneen näppäimistöllä, yli 1024px:iä leveillä näytöillä.</p><p>Harjoittelun kohteena: Javascript, HTML, CSS</p>
            <img src={require('../../src/img/wormGameImg.png')} id="wormGameImg" class="box_shadow" alt="gameplay"/>
        </>
        )
    }
}

export default Matopeli;