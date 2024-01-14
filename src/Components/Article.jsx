import React from "react";
import Me from './Me';
import Projects from './Projects';
import Links from './Links';

function Article (props){

    let content = "";
      
    switch(props.id){
        case "aboutMe":
            content = <Me />
            break;
        case "myProjects":
            content = <Projects />
            break;
        case "links":
            content = <Links />
            break;
        default:
            break;
    }   

    return (
        <article id={props.id} class="box_shadow">
            <h1>{props.heading}</h1>
            {content}
        </article>);
}

export default Article;