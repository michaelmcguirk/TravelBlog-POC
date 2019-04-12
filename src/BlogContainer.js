import React, {Component} from 'react'
import ContentComponent from './ContentComponent';
import Gallery from 'react-photo-gallery';

class BlogContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ContentComponent place={this.props.place}/>
                <Gallery photos={this.props.place.gallery}/>
            </div> 
        );
    }
}

export default BlogContainer;