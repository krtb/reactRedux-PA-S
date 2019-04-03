import './ImageList.css';
import React from 'react';

// after creating images prop, now passing in that data by
// ADDING PROPS
const ImageList = (props) => {
    // going to map over our list of images
    const images = props.images.map( ( { description, id, urls} ) =>{
        // when creating lists in react, they have to have a unique key 
        return (
            // since we repeat the `image` keyword, can destructure this out
          <img key={id} alt={description} src={urls.regular} />
        );
    });


    return <div className="image-list">{images}</div>
}

export default ImageList