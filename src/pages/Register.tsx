import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../theme/toast';
import {registerUser}  from '../theme/firebaseConfig';
import * as firebase from 'firebase';
import './Home.css'



const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

  
   async function register(){
      //validation
        if(password !== cpassword){
          return toast('Password do not match')
        }
        if(username.trim() === "" || password.trim() === ""){
          return toast('Username and password required')
        }
        const res = await registerUser(username, password)
        if(res){
          saveInDbs();
          return toast('Registration successful, now you need to log in!')
        } 
         
    }

    const saveInDbs = () =>{
      const user = firebase.auth().currentUser;
      var username;
      const toDbs = firebase.database().ref('users/' + firebase.auth().currentUser?.uid);
      if(user != null){
        username = user.email;
      }
      const user1 = {
        username
      }

      toDbs.push(user1);
    }

    
  return (
    <IonPage>
    <IonHeader className="header">
      <IonTitle className="title">Register!</IonTitle>
    </IonHeader>
        <IonContent className="body">
        <div  className="mainLogin">
        <IonInput placeholder="Username:"
        onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
        <IonInput type="password" placeholder="Password:"
        onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
        <IonInput type="password" placeholder="Confrim Password:"
        onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
        </div>
          <div className="btnsLog">
          <IonButton  className="mainbtn" fill="clear" onClick={register}>Register</IonButton>
          </div>
          <p className="borderP">Already have an account? <Link to="/login">Login</Link></p>
        </IonContent>
  </IonPage>  
  )
}

export default Register;
