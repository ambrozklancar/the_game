import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User_page from './pages/User_page';
import Inventory from './pages/Inventory';
import GeoMap from './pages/GeoMap';
import React, {useEffect, useState } from 'react';
import { getCurrentUser} from './theme/firebaseConfig';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const RoutingSystem: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/User_page" component={User_page}/>
          <Route path="/Inventory" component={Inventory}/>
          <Route path="/GeoMap" component={GeoMap}/>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    )

}

const App: React.FC = () => {
  const [busy, setBusy] = useState(true)

  useEffect(() => {
        getCurrentUser().then((user : any) =>{
          if (user){
            window.history.replaceState({}, '', '/User_page')
          } else {
            window.history.replaceState({}, '', '/')
          }
          setBusy(false)
        })
  }, [])

  return <IonApp>{busy ? <IonSpinner /> : <RoutingSystem />}</IonApp>
  
  
 
}
export default App;