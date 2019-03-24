import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import mapStyles from './MapStyles';


const MapContainer = withScriptjs(withGoogleMap((props) => 
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
                    onClick={props.setPlace.bind(this, entry.location.address)}>
                </Marker>
            )
        })}
    </GoogleMap>
))

export default MapContainer;

