import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export const MapContainer = (props) => {
  const onMarkerClick = (e) => {
    console.log(e);
  };
  return (
    <iframe
      width="100%"
      height="700"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=91%20Hafez%20Ramadan,%20Al%20Manteqah%20as%20Sadesah,%20Nasr%20City,%20Egypt+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo",
})(MapContainer);
