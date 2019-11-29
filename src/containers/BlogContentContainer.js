import React, {Component} from 'react'
import Content from '../components/Content';
import PropTypes from 'prop-types';
import ImageGallery from '../components/ImageGallery';

class BlogContentContainer extends Component {
    render(){
        return(
            <div>
                <div className="layer" id="content-layer">
                    <div className="content">
                        <Content place={this.props.place}/>
                        <ImageGallery place={this.props.place}/>
                    </div>
                </div>
            </div> 
        );
    }
}

BlogContentContainer.propTypes = {
    places: PropTypes.object
}

export default BlogContentContainer;