import React, { Component } from "react";

class LocationUser extends Component {
  interval: number | undefined;
  
  constructor(props:any) {
    super(props);
    this.state = {time: Date.now()};
  }
  
  componentDidMount() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        
      });
      
    }
    
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    console.log(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (    
      <h1></h1>
    )
  }
}

export default LocationUser;