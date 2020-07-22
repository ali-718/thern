import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const MapContainer = (props) => {
  const onMarkerClick = (e) => {
    console.log(e)
  }
  return (
    <Map 
      google={props.google} 
      zoom={14}
      initialCenter={{
          lat: 23.7808875,
          lng: 90.2792371
      }}
    >

      <Marker onClick={onMarkerClick}
              name={'Current location'} />
    </Map>
  );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo')
})(MapContainer)