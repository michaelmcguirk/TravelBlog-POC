import React, { Component } from 'react';
import MapContainer from './MapContainer';
import BlogContainer from './BlogContainer';
import Header from './Header';
import './App.css';
import Axios from 'axios';
import config from './config';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import About from './About';

import Popup from 'reactjs-popup';
import BurgerIcon from './BurgerMenuIcon';
import Menu from './NavMenu';

const contentStyle = {
  background: "rgba(255,255,255,0",
  border: "none"
};

const  overlayStyle = {
  background: "rgba(255,255,255,0.98",
}

class App extends Component {
  state = {
    currentSelected: {location:{}, gallery: []},
    entries: []
  }

  getAspectRatio = (imagePath) => {
    let ratio = {};
    let ratioIndex = (imagePath.lastIndexOf(".") - 1 );
    let ratioString = imagePath.substring(ratioIndex, ratioIndex+1);

    if(ratioString === 'p'){
      ratio = {width: 9, height: 16};
    }else{
      ratio = {width: 16, height: 9};
    }
    return ratio;
  }

  parsePhotos = (gallery) => {
    if(gallery.length === 0) return [];
    const images = gallery.map(g => {
      let ratio = this.getAspectRatio(g.path);
        return {
            src: `${config.server}${g.path}`,
            width: ratio.width,
            height: ratio.height
        }
    });
    return images;
  }

  componentDidMount = () => {
    Axios.get(`http://localhost/cockpit-master/api/collections/get/blogs?token=${config.cockpitToken}`)
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
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="blog-section">
            <Popup
                modal
                overlayStyle={overlayStyle}
                contentStyle={contentStyle}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}
            >
                {close => <Menu className="menu" close={close} />}
            </Popup>
            <Header/>
            <Switch>
              <Route exact path="/Home" render={(props) => <BlogContainer {...props} place={this.state.currentSelected}/>}/>
              <Route exact path="/About" component={About}/>
              <Route exact path="/"><Redirect to="/Home"/></Route>
            </Switch>
          </div>
          <div className="map-section">
            <MapContainer
              entries={this.state.entries}
              setPlace={this.setPlace}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.mapsApiKey}&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={ <div style={{ height: "100vh", width: "100%" }} />}
              mapElement={<div style={{ height: "100%" }}/>}
            />
          </div>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
