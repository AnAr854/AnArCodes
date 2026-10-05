import React, { useEffect, useState } from "react";

function ProjectImagesContainer(props) {
    const [activeImage, setActiveImage] = useState(0);
    const [zoomedImage, setZoomedImage] = useState(null);
    const imagesToAdd = props.imagesToAdd;

    useEffect(() => {
        if (!zoomedImage) {
            return undefined;
        }

        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setZoomedImage(null);
            }
        };

        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [zoomedImage]);

    let gallery;
    if (props.carousel) {
        const image = imagesToAdd[activeImage];
        const showImage = (index) => {
            setActiveImage((index + imagesToAdd.length) % imagesToAdd.length);
        };

        gallery = (
            <section className="projectImages projectCarousel" aria-label="Projektikuvat">
                <figure>
                    <figcaption>{image.title}</figcaption>
                    <img
                        src={image.src}
                        className={image.isMobileImg ? "mobileScreenShot" : "projectImg"}
                        alt={image.alt}
                        onClick={() => setZoomedImage(image)}
                    />
                    <div className="carouselControls">
                        <button type="button" aria-label="Edellinen kuva" onClick={() => showImage(activeImage - 1)}>
                            &#8592;
                        </button>
                        <span aria-live="polite">{activeImage + 1} / {imagesToAdd.length}</span>
                        <button type="button" aria-label="Seuraava kuva" onClick={() => showImage(activeImage + 1)}>
                            &#8594;
                        </button>
                    </div>
                </figure>
            </section>
        );
    } else {
        gallery = (
            <section className="projectImages">
            {imagesToAdd.map((img) =>
                    <figure key={img.src}>
                        <figcaption>{img.title}</figcaption>
                        <img
                            src={img.src}
                            className={img.isMobileImg ? "mobileScreenShot" : "projectImg"}
                            alt={img.alt}
                            onClick={() => setZoomedImage(img)}
                        />
                    </figure>
            )}
            </section>
        );
    }

    return (
        <>
            {gallery}
            {zoomedImage && (
                <div className="imageZoomOverlay" onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        setZoomedImage(null);
                    }
                }}>
                    <div className="imageZoomDialog" role="dialog" aria-modal="true" aria-label={zoomedImage.alt}>
                        <button className="imageZoomClose" type="button" aria-label="Sulje suurennettu kuva" onClick={() => setZoomedImage(null)}>
                            &times;
                        </button>
                        <img
                            className="imageZoomed"
                            src={zoomedImage.src}
                            alt={zoomedImage.alt}
                            onClick={() => setZoomedImage(null)}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectImagesContainer;
