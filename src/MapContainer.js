import React, {Component} from "react";
import { withGoogleMap, GoogleMap, withScriptjs, Marker} from "react-google-maps";
import mapStyles from './MapStyles';
import { withRouter } from 'react-router-dom';

/* const MapContainer = withScriptjs(withGoogleMap((props) => 
    <GoogleMap 
        defaultZoom={3} 
        defaultCenter={{lat:-13.387047,lng:-58.460623}}
        options={{styles: mapStyles, gestureHandling: 'none'}}>
        {props.entries && props.entries.map((entry, i) => {
            let lat = parseFloat(entry.location.lat, 10);
            let lng = parseFloat(entry.location.lng, 10);
            return(
                <Marker
                    key={entry.id}
                    name={entry.location.address}
                    position={{ lat: lat, lng: lng }}
                    onClick={props.setPlace.bind(this, entry)}>
                </Marker>
            )
        })}
    </GoogleMap>
)) */

class MapContainer extends Component{

    checkPath(){
        if(this.props.location.pathname !== '/Home'){
            console.log("Pushing Path to /Home")
            this.props.history.push('/Home');
        }
    }

    render(){
        return(
            <GoogleMap 
                defaultZoom={3} 
                defaultCenter={{lat:-13.387047,lng:-58.460623}}
                options={{styles: mapStyles, gestureHandling: 'none'}}>
                {this.props.entries && this.props.entries.map((entry, i) => {
                    let lat = parseFloat(entry.location.lat, 10);
                    let lng = parseFloat(entry.location.lng, 10);
                    return(
                        <Marker
                            key={entry.id}
                            name={entry.location.address}
                            position={{ lat: lat, lng: lng }}
                            onClick={() => {this.props.setPlace.call(this, entry); this.checkPath.call(this)}}>
                        </Marker>
                    )
                })}
            </GoogleMap>
        )
    }
}

export default withRouter(withScriptjs(withGoogleMap((props) => <MapContainer {...props}/>)));

