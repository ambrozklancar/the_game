import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle} from '@ionic/react';
import React from 'react';
import './Home.css';



const Home: React.FC = () => {
  return (
    
    <IonPage>
      <IonHeader className="header">
          <IonTitle className="title">GeoStating</IonTitle>
      </IonHeader>
          <IonContent className="body">
          <div  className="mainHeading">
          <IonText className="nameHome">Welcome to  GeoStating</IonText>
          </div> 
            <div className="btns">
              <IonButton className="mainbtn" fill="clear" routerLink="/login">Login</IonButton><br/>
              <IonButton className="mainbtn" fill="clear" routerLink="/register">Register</IonButton>
            </div>
          </IonContent>
    </IonPage>
  );
};


export default Home;
