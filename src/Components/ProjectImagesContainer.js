import React from "react";

function handleClick(event) {
    event.preventDefault();
    if (window.innerWidth >= 800) {
        if (event.target.width > event.target.height) {
            event.target.classList.toggle("horizontalProjectFigureLarger");
        }
        if (event.target.width < event.target.height) {
            event.target.classList.toggle("verticalProjectFigureLarger");
        }
    }
}

function ProjectImagesContainer(props) {
    let mapKey = 0;

    const images = props.imagesToAdd.map((img) =>
        <figure key={mapKey++}>
            <figcaption>{img.title}</figcaption>
            {console.log(img)}
            <img src={img.src} className={img.isMobileImg ? "mobileScreenShot" : "projectImg"} alt={props.alt} onClick={handleClick}></img>
        </figure>
    );
    return (
        <section className="projectImages">{images}</section>
    )
}

export default ProjectImagesContainer;

