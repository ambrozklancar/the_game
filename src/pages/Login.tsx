import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {loginUser} from '../theme/firebaseConfig'
import { toast } from '../theme/toast';
import './Home.css'

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  async function login(){
    setBusy(true)
    const res = await loginUser(username,password);
    if (res) {
      history.replace('/User_page')
      toast('You have logged in!');      
    }
    setBusy(false)

  }
 
    return (
      <IonPage>
      <IonHeader className="header">
        <IonTitle className="title">Login!</IonTitle>
        <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
      </IonHeader>
          <IonContent className="body">
          <div className="mainLogin">
          <IonInput placeholder="Username:"
                onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
          <IonInput type="password" placeholder="Password:"
                onIonChange={(e: any)=> setPassword(e.target.value)}></IonInput>
            </div>
            <div className="btnsLog">
            <IonButton className="mainbtn" fill="clear" onClick={login}>Login</IonButton>
            </div>
            <p className="borderP">New here? <Link to="/register">Register</Link></p>
          </IonContent>
    </IonPage>   
    )
    }
export default Login

