import React, { Component } from 'react';
import MapContainer from './MapContainer';
import BlogContentContainer from './BlogContentContainer';
import Header from './Header';
import Axios from 'axios';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import MobileHeader from './MobileHeader';
import BurgerMenu from './BurgerMenu';

class BlogContainer extends Component {
    
    state = {
        currentSelected: {
            location:{}, 
            gallery: [], 
            content: "Select a marker on the map to begin..."},
        entries: []
    }

    getAspectRatio = (imagePath) => {
        let ratio = {};
        let ratioIndex = (imagePath.lastIndexOf(".") - 1 );
        let ratioString = imagePath.substring(ratioIndex, ratioIndex+1);
    
        if(ratioString === 'p'){
          ratio = {width: 4, height: 5};
        }else{
          ratio = {width: 5, height: 4};
        }
        return ratio;
      }
    
    parsePhotos = (gallery) => {
        if(gallery.length === 0) return [];
        const images = gallery.map(g => {
            let ratio = this.getAspectRatio(g.path);
            return {
                src: `${process.env.REACT_APP_COCKPIT_DOMAIN}${g.path}`,
                width: ratio.width,
                height: ratio.height
            }
        });
        return images;
    }

    componentDidMount = () => {
        Axios.get(`${process.env.REACT_APP_COCKPIT_SERVER}/api/collections/get/${process.env.REACT_APP_COCKPIT_COLLECTION}?token=${process.env.REACT_APP_COCKPIT}`)
          .then(response => {
            const newEntries = response.data.entries.map(c => {
              return {
                title: c.title,
                content: c.content,
                location: c.location,
                id: c._id,
                published: c.published,
                gallery: this.parsePhotos(c.gallery)
              }
            });
            this.setState({entries: newEntries});
        });
    }

    setPlace = (place) => {
        this.setState({currentSelected: place})
    }
    
    render(){
        return(
            <div className="blog-container">
                <BurgerMenu/>
                <MobileHeader/> 
                <div className="blog-section">
                    <Header/>
                    <Switch>
                        <Route exact path="/Home" render={(props) => <BlogContentContainer {...props} place={this.state.currentSelected}/>}/>
                        <Route exact path="/About" component={About}/>
                        <Route exact path="/"><Redirect to="/Home"/></Route>
                    </Switch>
                </div>
                <div className="map-section">
                    <MapContainer
                        entries={this.state.entries}
                        setPlace={this.setPlace}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP}&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={ <div style={{ height: "100vh", width: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }}/>}
                    />
                </div>
            </div>
        );

    }
}

export default BlogContainer;