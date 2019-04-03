import React from 'react';

class ImageCard extends React.Component {
    // will assume that image object will be passed to image card as a PROP called image 
    constructor(props) {
        super(props)
        // created a React Refrence 
        // assign to instance variable to refer to back to it again inside of our class
        // referncing this will now tell us something about the DOM node
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        // here image has not downloaded yet, getting 0 as img height
        console.log(this.imageRef.current.clientHeight);
    }
    
    render() {
        // destructure out of image object
        const { description, urls } = this.props.image;

        return (
            <img alt={description} 
            src={urls.regular}
            ref={this.imageRef}
            />
        );
    }
}

export default ImageCard