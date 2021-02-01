
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {

 
  render() {
    return (
  
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter= {{lat:26.856183524639754,
            lng:75.76946193061978}}
          defaultZoom={12}
        >
          <AnyReactComponent
            lat={26.856183524639754}
            lng={75.76946193061978}
            text={ <i class="fa fa-map-marker" style={{fontSize:'2rem'}} aria-hidden="true"></i>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
