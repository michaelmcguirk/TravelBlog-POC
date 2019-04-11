import React from 'react'
import ContentComponent from './ContentComponent';
import Gallery from 'react-photo-gallery';
import photos from './images';

const BlogContainer = ({place}) => 
    <div>
        <ContentComponent place={place}/>
        <Gallery photos={photos}/>
    </div>


export default BlogContainer;