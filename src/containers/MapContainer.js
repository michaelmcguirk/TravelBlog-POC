import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow} from "react-google-maps";
import mapStyles from '../MapStyles';
import { withRouter } from 'react-router-dom';


class MapContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            infoWindows: this.props.entries.map(p => {
                return {isOpen: false}
            }), 
        }
    }

    markerOnMouseOver = selectedIndex => {
        this.setState({
            infoWindows: this.state.infoWindows.map((iw, i) => {
                iw.isOpen = selectedIndex === i;
                return iw;
            })
        });
    }

    markerOnMouseOut = selectedIndex => {
        this.setState({
            infoWindows: this.state.infoWindows.map((iw, i) => {
                iw.isOpen = !selectedIndex === i;
                return iw;
            })
        });
    }

    checkPath(){
        const contentElement = document.getElementById('content-layer')
        if(window.matchMedia("only screen and (max-width: 768px)").matches){
            contentElement.scrollIntoView(true);
        }
        if(this.props.location.pathname !== '/Home'){
            this.props.history.push('/Home');
        }
    }

    render(){
        return(
            <GoogleMap 
                defaultZoom={3} 
                defaultCenter={{lat:-13.387047,lng:-58.460623}}
                options={{
                    styles: mapStyles, 
                    gestureHandling: 'none',
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false}}
                >
                {this.props.entries && this.props.entries.map((entry, i) => {
                    let lat = parseFloat(entry.location.lat, 10);
                    let lng = parseFloat(entry.location.lng, 10);
                    return(
                        <Marker
                            key={entry.id}
                            name={entry.location.address}
                            position={{ lat: lat, lng: lng }}
                            onClick={() => {this.props.setPlace.call(this, entry); this.checkPath.call(this)}}
                            onMouseOver={this.markerOnMouseOver.bind(this, i)}
                            onMouseOut={this.markerOnMouseOut.bind(this,i)}>
                                {this.state.infoWindows.length !== 0 ? this.state.infoWindows[i].isOpen &&
                                    <InfoWindow>
                                        <div>{entry.location.address}</div>
                                    </InfoWindow>
                                :null}
                        </Marker>
                    )
                })}
            </GoogleMap>
        )
    }
}

MapContainer.propTypes = {
    entries: PropTypes.array,
    setPlace: PropTypes.func,
    googleMapURL: PropTypes.string,
    loadingElement: PropTypes.element,
    containerElement: PropTypes.element,
    mapElement: PropTypes.array
}

export default withRouter(withScriptjs(withGoogleMap((props) => <MapContainer {...props}/>)));

