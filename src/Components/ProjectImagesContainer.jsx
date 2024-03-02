import React from "react";

function ProjectImagesContainer (props){
    let mapKey = 0;

       const images = props.imagesToAdd.map((img) =>
            <figure key={mapKey++} >
                <figcaption>{img.title}</figcaption>
                <img src={img.src} class="projectImg" alt={props.alt}></img>
            </figure>
        );
        return(
            <section class="projectImages">{images}</section>
        )
}

export default ProjectImagesContainer;

