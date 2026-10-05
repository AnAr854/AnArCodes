import React from "react";

const skillGroups = [
    {
        label: "Ohjelmointikielet",
        skills: [
            ["JavaScript", "javascript"],
            ["PHP", "php"],
            ["Python", "python"],
            ["HTML", "html5"],
            ["CSS", "https://api.iconify.design/devicon:css3.svg"]
        ]
    },
    {
        label: "Kirjastot ja frameworkit",
        skills: [
            ["React", "react"],
            ["Node.js", "nodedotjs"],
            ["Express.js", "express/ffffff"]
        ]
    },
    {
        label: "Tietokannat",
        skills: [
            ["MySQL", "mysql"],
            ["PostgreSQL", "postgresql"],
            ["MongoDB", "mongodb"]
        ]
    },
    {
        label: "Automaatio",
        skills: [
            ["UiPath", "uipath"],
            ["Power Automate", "https://api.iconify.design/selfhst:microsoft-power-automate.svg"]
        ]
    },
    {
        label: "Projektinhallinta",
        skills: [
            ["Jira", "jira"],
            ["Confluence", "confluence"],
            ["GitHub", "github/ffffff"]
        ]
    },
    {
        label: "Työkalut",
        skills: [
            ["Visual Studio Code", "https://api.iconify.design/logos:visual-studio-code.svg"],
            ["PyCharm", "pycharm/ffffff"],
            ["Postman", "postman"]
        ]
    }
];

function SkillsAside() {
    return (
        <aside className="skillsAside" aria-label="Teknologiaosaaminen">
            {skillGroups.map((group) => (
                <div className="skillGroup" key={group.label} role="group" aria-label={group.label}>
                    {group.skills.map(([name, icon]) => (
                        <img
                            className="skillIcon"
                            key={name}
                            src={icon.startsWith("https://") ? icon : `https://cdn.simpleicons.org/${icon}`}
                            alt={name}
                            title={name}
                            loading="lazy"
                        />
                    ))}
                </div>
            ))}
        </aside>
    );
}

export default SkillsAside;
