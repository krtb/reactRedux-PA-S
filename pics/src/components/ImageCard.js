import React from 'react';

class ImageCard extends React.Component {
    // will assume that image object will be passed to image card as a PROP called image    
    render() {
        // destructure out of image object
        const { description, urls } = this.props.image;

        return (
            <img alt={description} 
            src={urls.regular} 
            />
        );
    }
}

export default ImageCard