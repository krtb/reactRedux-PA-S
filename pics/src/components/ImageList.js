import React from 'react';

// after creating images prop, now passing in that data by
// ADDING PROPS
const ImageList = (props) => {
    // going to map over our list of images
    const images = props.images.map((image)=>{
        // when creating lists in react, they have to have a unique key 
        return <img key={image.id} src={image.urls.regular} />
    });


    return <div>{images}</div>
}

export default ImageList