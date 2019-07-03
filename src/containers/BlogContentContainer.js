import React, {Component} from 'react'
import Content from '../components/Content';
import ImageGallery from '../components/ImageGallery';

class BlogContentContainer extends Component {
    render(){
        return(
            <div>
                <div className="layer">
                    <div className="content">
                        <Content place={this.props.place}/>
                        <ImageGallery place={this.props.place}/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default BlogContentContainer;