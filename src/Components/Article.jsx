import React from "react";
import Links from "./Links";
import Navbar from "./Navbar";
import StudiesBeforeSchool from "./StudiesBeforeSchool";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Future from "./Future";

function Article (props){

    let content = "";
    let className = "box_shadow";
      
    switch(props.id){
        case "myProjects":
            content = <Navbar />
        break;
        case "links":
            content = <Links />
        break;
        case "education":
            content = <Education />
            className = className + " halfWidthArticle"
        break;
        case "workHistory":
            content = <WorkHistory />
            className = className + " halfWidthArticle"
        break;
        case "studiesBeforeSchool":
            content = <StudiesBeforeSchool />
        break;
        case "future":
            content = <Future />
        break;
        default:
            break;
    }   

    return (
        <article id={props.id} className={className}>
            <h1>{props.heading}</h1>
            {content}
        </article>);
}

export default Article;