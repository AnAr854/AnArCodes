import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Links(){
    return(
        <div>
            <a href="https://github.com/AnAr854" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: '5em', color:"#f6dd3c"}}  /></a>
            <a href="https://linkedin.com/in/anne-arhipoff" target="_blank" rel="noreferrer"><LinkedInIcon style={{ fontSize: '5em', color:"#f6dd3c" }} /></a>
        </div>
    )
}

export default Links;