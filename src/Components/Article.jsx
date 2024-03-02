import React from "react";
import Links from "./Links";
import Navbar from "./Navbar";
import WorkHistory from "./WorkHistory";
import StudiesBeforeSchool from "./StudiesBeforeSchool";
import StudiesInSchool from "./StudiesInSchool";
import Education from "./Education";

function Article (props){

    let content = "";
      
    switch(props.id){
        case "myProjects":
            content = <Navbar />
        break;
        case "links":
            content = <Links />
        break;
        case "workHistory":
            content = <WorkHistory />
        break;
        case "studiesBeforeSchool":
            content = <StudiesBeforeSchool />
        break;
        case "studiesInSchool":
            content = <StudiesInSchool />
        break;
        case "education":
                content = <Education />
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