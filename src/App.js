import React, { Component } from 'react';
import MapContainer from './MapContainer';
import BlogContainer from './BlogContainer';
import './App.css';
import Axios from 'axios';
import config from './config';

class App extends Component {
  state = {
    currentSelected: {location:{}, gallery: []},
    entries: []
  }

  parsePhotos = (gallery) => {
    const images = gallery.map(g => {
        return {
            src: `${config.server}${g.path}`,
            width: 16,
            height: 9
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
      <div className="App">
        <div className="Blog-Section">
          <BlogContainer place={this.state.currentSelected}/>
        </div>
        <div className="Map-Section">
          <MapContainer
            entries={this.state.entries}
            setPlace={this.setPlace}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.mapsApiKey}&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={ <div style={{ height: "100vh", width: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
