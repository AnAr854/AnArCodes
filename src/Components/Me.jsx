import React from "react";
import { Link, useLocation } from "react-router-dom";

const basePath = import.meta.env.BASE_URL || '/';
const anneAvatar = `${basePath}img/anne_avatar.svg`;

function Me() {
    let linkInHeader = "";
    let url = useLocation().pathname;

    if (url.includes("more")) {
        linkInHeader = <Link to="/">Takaisin projekteihin</Link>;
    } else {
        linkInHeader = <Link to="/moreAboutMe">Lisää minusta</Link>;
    };
    const projectsLink = url.includes("more")
        ? <Link className="portfolioHeroPrimary" to="/">Katso projekteja <span aria-hidden="true">↘</span></Link>
        : <a className="portfolioHeroPrimary" href="#myProjects">Katso projekteja <span aria-hidden="true">↘</span></a>;

    return (
        <header className="portfolioHero">
            <div id="headerTexts" className="portfolioHeroContent">
                <p className="portfolioHeroEyebrow">PORTFOLIO <span aria-hidden="true">/</span> WEB-KEHITYS</p>
                <h1><span>Anne</span><span>Arhipoff</span></h1>
                <h2 id="backToNavigationAnchor">Motivoitunut koodari Suomussalmelta.</h2>
                <nav className="portfolioHeroActions" aria-label="Portfolio">
                    {projectsLink}
                    {linkInHeader}
                </nav>
            </div>
            <div className="portfolioHeroVisual" aria-hidden="true">
                <div className="portfolioHeroFrame">
                    <img className="portfolioHeroAvatar" src={anneAvatar} alt="" />
                    <span className="portfolioHeroVisualLabel">ANNE ARHIPOFF</span>
                </div>
                <span className="portfolioHeroOrbit portfolioHeroOrbitOne"></span>
                <span className="portfolioHeroOrbit portfolioHeroOrbitTwo"></span>
                <span className="portfolioHeroDot"></span>
            </div>
        </header>
    )
}

export default Me;
