import { GenerateCard1 } from "../theme/firebaseConfig";
import { toast } from "../theme/toast";
import { getDistanceFromLatLonInKm } from "./getDistanceFromLatLonInKm";

export function checkUser(latitudeMap:any, longitudeMap:any){
    
    var options = {
        enableHighAccuracy: true,
      };

    function success( pos: { coords: any; }) {
        var crd = pos.coords;
        console.log(pos.coords);
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`)
        console.log(`More or less ${crd.accuracy} meters.`);

        getDistanceFromLatLonInKm(latitudeMap,longitudeMap,crd.latitude,crd.longitude)
        console.log(getDistanceFromLatLonInKm)

        if(getDistanceFromLatLonInKm(latitudeMap,longitudeMap,crd.latitude,crd.longitude) < 50){
            GenerateCard1();
            toast('You got a card. Check inventory!')
        }
        else toast('Check location. You are ' + Math.round(getDistanceFromLatLonInKm(latitudeMap,longitudeMap,crd.latitude,crd.longitude))  + " meters away.")
      }
      
      function error(err: { code: any; message: any; }) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
}


  
  