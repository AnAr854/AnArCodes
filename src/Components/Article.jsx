import React from "react";
import Links from './Links';
import Navbar from "./Navbar";

function Article (props){

    let content = "";
      
    switch(props.id){
        case "myProjects":
            content = <Navbar />
            break;
        case "links":
            content = <Links />
            break;
        default:
            break;
    }   

    return (
        <article id={props.id} className="box_shadow">
            <h1>{props.heading}</h1>
            {content}
        </article>);
}

export default Article;