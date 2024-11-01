import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import React from "react";

const mapContainerStyle = {
  width: "700px",
  // height: '2000px',
  float: "left",
};

const defaultCenter = {
  lat: 36.14896463588831, // default latitude
  lng: -115.17517089843751, // default longitude
};

const createPositionMarker = (lat, lng) => {
  return {
    lat: Number(lat),
    lng: Number(lng),
  };
};

const AddressMap = ({ hotels }) => {
  console.log(hotels);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={defaultCenter}
      >
        {hotels.map((hotel, index) => {
          // Create position marker for each hotel
          const position = createPositionMarker(
            hotel.latitude,
            hotel.longitude
          );
          return (
            <Marker
              key={index}
              position={position} // Use position directly
              label={String(index + 1)}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default AddressMap;


