import React,{ useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as geoMap from "./data/geoMap.json";
import { IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonItem} from '@ionic/react';
import './geoMap.css';
import { checkUser } from './checkLocation';

const GeoMap: React.FC = () =>{

    const [viewport, setViewport] = useState({
        latitude: 46.21807621343992,   
        longitude: 14.403713242578721,
        width:1000,
        height:1000,
        zoom: 12
    });

    const [selectedPoint, setSelectedPoint] = useState<any>(null);

    return (
        <IonPage>
        <IonHeader className="header">
            <IonTitle className="title">The Game!</IonTitle>
             <IonButton className="back" fill="clear" routerLink="/User_page">Back</IonButton>           
        </IonHeader>
        <ReactMapGL {...viewport} mapboxApiAccessToken =  {"pk.eyJ1IjoiZGptYW50YSIsImEiOiJja2g0cnJ1c2EwZTN0MnhzNXp2Z3E3aW5uIn0.Qr-xIE3TiCLHJvGGQTAhBA"}
        mapStyle = "mapbox://styles/djmanta/ckltw13772tto17mwa0a99qkb"
        onViewportChange={viewport => {
            setViewport(viewport);
        }}
        >
          {geoMap.features.map((place) => (
            <Marker
            key={place.properties.name} 
            latitude={place.geometry.coordinates[0]}
            longitude={place.geometry.coordinates[1]}
            >
              
              <IonButton fill="clear" className="marker-btn" onClick={e => {
                e.preventDefault()
                setSelectedPoint(place)
              }}>
              </IonButton>
            </Marker>
          ))}

          {selectedPoint ? (
            <Popup latitude={selectedPoint.geometry.coordinates[0]}
                  longitude={selectedPoint.geometry.coordinates[1]}
                  
            >
              <IonItem>
                <IonHeader>{selectedPoint.properties.name}</IonHeader>
              </IonItem>
              <IonItem>
                <IonText>{selectedPoint.properties.address}</IonText>
              </IonItem>
              <IonItem>
                <IonButton onClick={() =>
                checkUser(selectedPoint.geometry.coordinates[0],selectedPoint.geometry.coordinates[1])}>
                Check Location</IonButton>
              </IonItem>
            </Popup>
          ) : null}            
        </ReactMapGL>
        
        
      </IonPage> 
    )   
}
export default GeoMap;