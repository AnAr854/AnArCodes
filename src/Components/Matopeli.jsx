import React from "react";

function Matopeli (){
    if(window.innerWidth >= 1024){
        return(
            <>
                <h2 class="projectHeading box_shadow">Matopeli</h2>
                <p>Ensimmäinen oma projekti oli nostalginen matopeli värillisenä ja valmistui alkukeväällä 2023. (Pelataksesi klikkaa peliruutua ja ohjaa nuolinäppäimillä). Madon vauhti kasvaa asteittain. <br></br>Harjoittelun kohteena: Javascript, HTML, CSS</p>
                <iframe title="Matopeli" src="CrazyWormGameFinal/index.html"></iframe>
            </>
        )
    }else if (window.innerWidth < 1024){
        return (
            <>
            <h2 class="projectHeading">Matopeli</h2>
            <p class="projectDescription">Ensimmäinen oma projekti oli nostalginen matopeli värillisenä ja valmistui alkukeväällä 2023. Peliä voi kokeilla tietokoneen näppäimistöllä, yli 1024px:iä leveillä näytöillä. <br></br>Harjoittelun kohteena: Javascript, HTML, CSS</p>
            <img src="img/wormGameImg.png" id="wormGameImg" class="box_shadow" alt="gameplay"/>
        </>
        )
    }
}

export default Matopeli;