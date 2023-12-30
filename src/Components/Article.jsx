import React from "react";

function Article (props){
    return (
        <article id={props.id}>
            <h1>{props.heading}</h1>
        </article>);
}

export default Article;