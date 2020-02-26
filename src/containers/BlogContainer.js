import React, { Component } from 'react';
import MapContainer from './MapContainer';
import BlogContentContainer from './BlogContentContainer';
import Header from '../components/Header';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from '../components/About';
import MobileHeader from '../components/MobileHeader';
import BurgerMenu from '../components/BurgerMenu';
import getPlaces from '../api/CockpitPlacesAPI';
import {parsePhotos} from '../utilities/APIUtilities';
import MapIcon from '../components/MapIcon';

class BlogContainer extends Component {
    
    state = {
        currentSelected: {
            location:{}, 
            gallery: [], 
            content: "Select a marker on the map to begin..."},
        entries: []
    }

    callGetPlacesAPI = () => {
        getPlaces().then(data => {
            console.log(data);
            const newEntries = data.map(c => {
                return{
                    title: c.title,
                    content: c.content,
                    location: c.location,
                    id: c._id,
                    published: c.published,
                    gallery: parsePhotos(c.gallery)
                }
            });
            this.setState({entries: newEntries});
        });
    }

    componentDidMount = () => {
        this.callGetPlacesAPI();
    }

    setPlace = (place) => {
        this.setState({currentSelected: place})
    }
    
    render(){
        return(
            <div className="blog-container">
                <BurgerMenu/>
                <MapIcon/>
                <MobileHeader/>
                <div className="map-instruction">
                    <p>Select a marker on the map below...</p>
                </div>
                <div className="blog-section">
                    <Header/>
                    <Switch>
                        <Route exact path="/Home" render={(props) => <BlogContentContainer {...props} place={this.state.currentSelected}/>}/>
                        <Route exact path="/About" component={About}/>
                        <Route exact path="/"><Redirect to="/Home"/></Route>
                    </Switch>
                </div>
                <div className="map-section" id="map-section">
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