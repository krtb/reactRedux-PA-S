import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

// after creating images prop, now passing in that data by
// ADDING PROPS
const ImageList = (props) => {
    // going to map over our list of images
    const images = props.images.map( (image) =>{
        // when creating lists in react, they have to have a unique key 
        return (
          <ImageCard image={image} key={image.id} />
        );
    });


    return <div className="image-list">{images}</div>
}

export default ImageList