import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function ProjectGallery(props){
    let itemData = props.wantedImgs;

    return (
        <ImageList sx={{ width: 1400, height: 800 }} cols="1">
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`} 
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar class="bolderText"
                title={item.title}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
}

export default ProjectGallery;