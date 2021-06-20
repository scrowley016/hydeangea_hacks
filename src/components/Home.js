import React from 'react'
import Image from 'react-bootstrap/Image'

const Home =()=>{
    
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
}

export default Home