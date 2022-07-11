import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {logoutUser} from '../theme/firebaseConfig';
import { useHistory } from 'react-router';
import * as firebase from 'firebase';
import './userPage.css'

const User_page: React.FC = () =>{
  const history = useHistory()
  const user = firebase.auth().currentUser;

  var username = user?.email?.split('@')[0];

  async function logout(){
    await logoutUser()
    history.replace('/')
  }
    return (
        <IonPage>
          <IonHeader className="header">
              <IonTitle className="title">The Game!</IonTitle>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonText className="welcomeUser">Welcome to The game <span className="userName">{username}</span></IonText><br/>
            <div className="box">
            <IonButton className="userPageBtn" fill="clear" routerLink="/Inventory">Inventory</IonButton><br/>
            <IonButton className="userPageBtn" fill="clear" routerLink="/GeoMap">Map</IonButton><br/>
            <IonButton className="userPageBtn" fill="clear" onClick={logout}>Logout</IonButton>
            </div>
          </IonContent>
        </IonPage>  
      )
}
export default User_page;

