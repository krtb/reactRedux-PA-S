import React from 'react';

class ImageCard extends React.Component {
    // will assume that image object will be passed to image card as a PROP called image 
    constructor(props) {
        super(props)
        this.state = {
            spans: 0,
        }

        // created a React Refrence 
        // assign to instance variable to refer to back to it again inside of our class
        // referncing this will now tell us something about the DOM node
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        // Vanilla JS function
        // any time img loads, emits load event
        this.imageRef.current.addEventListener('load', this.setSpans)
        // adding a callback function as a second callback
        // callbacks need to be bound
    }

    // need to bind callback with arrow function
    // once current images have loaded, can then grab clientHeight
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        // add 1 in case it needs extra 
        // Math.ceil to cap 
        const spans = Math.ceil(height / 10 );

        // when key and value are equal, can make just single word
        this.setState({
            spans
        })
    }
    
    render() {
        // destructure out of image object
        const { description, urls } = this.props.image;

        return (
          <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
            <img
              alt={description}
              src={urls.regular}
              ref={this.imageRef}
            />
          </div>
        );
    }
}

export default ImageCard