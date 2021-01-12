import React from "react";
import ReactMapboxGl, { Layer, Feature ,Marker} from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const Home = (props) => {
  // Implement react map box here.

  return (
    <div>
      <h1>MAPBOX MAP HERE</h1>

      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/light-v10"
        // style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        center={[2.350149, 48.852872]}
      >
        <Marker coordinates={[2.350149,48.852972]}>
            <img alt="" src="/media/kombucha.svg"/>
        </Marker>
      </Map>

      <p>On home /</p>
    </div>
  );
};

export default Home;
