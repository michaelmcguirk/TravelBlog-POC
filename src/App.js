import React, { Component } from 'react';
import MapContainer from './MapContainer';
import BlogContainer from './BlogContainer';
import './App.css';
import Axios from 'axios';
import config from './config';

class App extends Component {
  state = {
    currentSelected: "",
    entries: []
  }

  componentDidMount = () => {
    Axios.get(`http://localhost/cockpit-master/api/collections/get/blogs?token=${config.cockpitToken}`)
      .then(response => {
        const newEntries = response.data.entries.map(c => {
          return {
            title: c.title,
            content: c.content,
            location: c.location,
            id: c._id
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
        <div className="Blog-Container">
          <BlogContainer
            place={this.state.currentSelected}/>
        </div>
        <div className="Map-Container">
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
