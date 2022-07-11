import React, {useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar,  IonInfiniteScroll} from '@ionic/react';
import './Inventory.css';
import { toast } from '../theme/toast';

const Inventory: React.FC = () =>{

    const user = firebase.auth().currentUser;

    const database = firebase.database()

    var username = user?.email?.split('@')[0];

    var [inventoryObjects, setInventoryObjects] = useState<any>({});
    var [inventoryObjectsUncommon, setinventoryObjectsUncommon] = useState<any>({});
    var [inventoryObjectsRare, setinventoryObjectsRare] = useState<any>({});
    var [inventoryObjectsUniqu, setinventoryObjectsUniqu] = useState<any>({});
    var [inventoryObjectsChaos, setinventoryObjectsChaos] = useState<any>({});

    useEffect(() => {
        let unmounted = false;
        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/common').on('value', snapshot => {
            if(snapshot.val() != null)
            setInventoryObjects({
                ...snapshot.val()
            })
        })
        return () => { unmounted = true };
    }, []);

    useEffect(() => {
      let unmounted = false;
      database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon').on('value', snapshot => {
          if(snapshot.val() != null)
          setinventoryObjectsUncommon({
              ...snapshot.val()
          })
      })
      return () => { unmounted = true };
  }, []);

  useEffect(() => {
    let unmounted = false;
    database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare').on('value', snapshot => {
        if(snapshot.val() != null)
        setinventoryObjectsRare({
            ...snapshot.val()
        })
    })
    return () => { unmounted = true };
}, []);

useEffect(() => {
  let unmounted = false;
  database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe').on('value', snapshot => {
      if(snapshot.val() != null)
      setinventoryObjectsUniqu({
          ...snapshot.val()
      })
  })
  return () => { unmounted = true };
}, []);

useEffect(() => {
  let unmounted = false;
  database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/chaos').on('value', snapshot => {
      if(snapshot.val() != null)
      setinventoryObjectsChaos({
          ...snapshot.val()
      })
  })
  return () => { unmounted = true };
}, []);

      var obsidianRing = 0;
      var fireRing = 0;
      var tartarRing = 0;
      var kaydraRing = 0;
      var mantaRing = 0;

      var obsidianRingUncommon = 0;
      var fireRingUncommon = 0;
      var tartarRingUncommon = 0;
      var kaydraRingUncommon = 0;
      var mantaRingUncommon = 0;

      var obsidianRingRare = 0;
      var fireRingRare = 0;
      var tartarRingRare = 0;
      var kaydraRingRare = 0;
      var mantaRingRare = 0;

      var obsidianRingUniqe = 0;
      var fireRingUniqe = 0;
      var tartarRingUniqe = 0;
      var kaydraRingUniqe = 0;
      var mantaRingUniqe = 0;

      var obsidianRingChaos = 0;
      var fireRingChaos = 0;
      var tartarRingChaos = 0;
      var kaydraRingChaos = 0;
      var mantaRingChaos = 0;



    Object.keys(inventoryObjects).map(id => {
      
      if (inventoryObjects[id].id === 'obsidian_ring') {                       
        obsidianRing++;
      }
      else if (inventoryObjects[id].id === 'fire_ring') {
        fireRing++;
      }
      else if (inventoryObjects[id].id === 'tartar_ring') {
        tartarRing++;
      }
      else if (inventoryObjects[id].id === 'kydra_ring') {
        kaydraRing++;
      }
      else if(inventoryObjects[id].id === 'manta_ring'){
        mantaRing++;
      }
    });

    Object.keys(inventoryObjectsUncommon).map(id => {
      
      if (inventoryObjectsUncommon[id].id === 'uncommon_obsidian_ring') {                       
        obsidianRingUncommon++;
      }
      else if (inventoryObjectsUncommon[id].id === 'uncommon_fire_ring') {
        fireRingUncommon++;
      }
      else if (inventoryObjectsUncommon[id].id === 'uncommon_tartar_ring') {
        tartarRingUncommon++;
      }
      else if (inventoryObjectsUncommon[id].id === 'uncommon_kydra_ring') {
        kaydraRingUncommon++;
      }
      else if(inventoryObjectsUncommon[id].id === 'uncommon_manta_ring'){
        mantaRingUncommon++;
      }
    });

    Object.keys(inventoryObjectsRare).map(id => {
      
      if (inventoryObjectsRare[id].id === 'rare_obsidian_ring') {                       
        obsidianRingRare++;
      }
      else if (inventoryObjectsRare[id].id === 'rare_fire_ring') {
        fireRingRare++;
      }
      else if (inventoryObjectsRare[id].id === 'rare_tartar_ring') {
        tartarRingRare++;
      }
      else if (inventoryObjectsRare[id].id === 'rare_kydra_ring') {
        kaydraRingRare++;
      }
      else if(inventoryObjectsRare[id].id === 'rare_manta_ring'){
        mantaRingRare++;
      }
    });

    Object.keys(inventoryObjectsUniqu).map(id => {
      
      if (inventoryObjectsUniqu[id].id === 'uniqu_obsidian_ring') {                       
        obsidianRingUniqe++;
      }
      else if (inventoryObjectsUniqu[id].id === 'uniqu_fire_ring') {
        fireRingUniqe++;
      }
      else if (inventoryObjectsUniqu[id].id === 'uniqu_tartar_ring') {
        tartarRingUniqe++;
      }
      else if (inventoryObjectsUniqu[id].id === 'uniqu_kydra_ring') {
        kaydraRingUniqe++;
      }
      else if(inventoryObjectsUniqu[id].id === 'uniqu_manta_ring'){
        mantaRingUniqe++;
      }
    });

    Object.keys(inventoryObjectsChaos).map(id => {
      
      if (inventoryObjectsChaos[id].id === 'chaos_obsidian_ring') {                       
        obsidianRingChaos++;
      }
      else if (inventoryObjectsChaos[id].id === 'chaos_fire_ring') {
        fireRingChaos++;
      }
      else if (inventoryObjectsChaos[id].id === 'chaos_tartar_ring') {
        tartarRingChaos++;
      }
      else if (inventoryObjectsChaos[id].id === 'chaos_kydra_ring') {
        kaydraRingChaos++;
      }
      else if(inventoryObjectsChaos[id].id === 'chaos_manta_ring'){
        mantaRingChaos++;
      }
    });

      //common fusions

      function obisidianRingFun(){   
      var remove = 0;   
      if(obsidianRing >= 3){

          Object.keys(inventoryObjects).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjects[id].id === 'obsidian_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/common/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon').push({
            rarity: "UNCOMMON",
            cardName: "OBSIDIAN TEAR RING",
            cardSet: "DRAGON SET",
            id: "uncommon_obsidian_ring"
          })

        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }
    
    function tartarRingFun(){   
      var remove = 0;   
      if(tartarRing >= 3){

          Object.keys(inventoryObjects).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjects[id].id === 'tartar_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/common/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon').push({
            rarity: "UNCOMMON",
            cardName: "GREAT TARTAR RING",
            cardSet: "DRAGON SET",
            id: "uncommon_tartar_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function kaydraRingFun(){   
      var remove = 0;   
      if(kaydraRing >= 3){

          Object.keys(inventoryObjects).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjects[id].id === 'kydra_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/common/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon').push({
            rarity: "UNCOMMON",
            cardName: "GOLDEN KAYDRA' S RING",
            cardSet: "DRAGON SET",
            id: "uncommon_kydra_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function fireRingFun(){   
      var remove = 0;   
      if(fireRing >= 3){

          Object.keys(inventoryObjects).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjects[id].id === 'fire_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/common/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon').push({
            rarity: "UNCOMMON",
            cardName: "MAGMA RING",
            cardSet: "DRAGON SET",
            id: "uncommon_fire_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function mantaRingFun(){   
      var remove = 0;   
      if(mantaRing >= 3){

          Object.keys(inventoryObjects).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjects[id].id === 'manta_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/common/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon').push({
            rarity: "UNCOMMON",
            cardName: "GOLDEN MANTA' S RING",
            cardSet: "DRAGON SET",
            id: "uncommon_manta_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    //uncommon fusions

    function fireRingUncommonFun(){   
      var remove = 0;   
      if(fireRingUncommon >= 3){

          Object.keys(inventoryObjectsUncommon).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUncommon[id].id === 'uncommon_fire_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare').push({
            rarity: "RARE",
            cardName: "LAVA RING",
            cardSet: "DRAGON SET",
            id: "rare_fire_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function obsidianRingUncommonFun(){   
      var remove = 0;   
      if(obsidianRingUncommon >= 3){

          Object.keys(inventoryObjectsUncommon).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUncommon[id].id === 'uncommon_obsidian_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare').push({
            rarity: "RARE",
            cardName: "DRAGON' S TEAR RING",
            cardSet: "DRAGON SET",
            id: "rare_obsidian_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function tartarRingUncommonFun(){   
      var remove = 0;   
      if(tartarRingUncommon >= 3){

          Object.keys(inventoryObjectsUncommon).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUncommon[id].id === 'uncommon_tartar_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare').push({
            rarity: "RARE",
            cardName: "DRAGON TOOTH",
            cardSet: "DRAGON SET",
            id: "rare_tartar_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function mantaRingUncommonFun(){   
      var remove = 0;   
      if(mantaRingUncommon >= 3){

          Object.keys(inventoryObjectsUncommon).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUncommon[id].id === 'uncommon_manta_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare').push({
            rarity: "RARE",
            cardName: "EMERALDIC MANTA' S RING",
            cardSet: "DRAGON SET",
            id: "rare_manta_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function kaydraRingUncommonFun(){   
      var remove = 0;   
      if(kaydraRingUncommon >= 3){

          Object.keys(inventoryObjectsUncommon).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUncommon[id].id === 'uncommon_kydra_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uncommon/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare').push({
            rarity: "RARE",
            cardName: "EMERALDIC KAYDRA' S RING",
            cardSet: "DRAGON SET",
            id: "rare_kydra_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    //rare fusion

    function kaydraRingRareFun(){   
      var remove = 0;   
      if(kaydraRingRare >= 3){

          Object.keys(inventoryObjectsRare).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsRare[id].id === 'rare_kydra_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe').push({
            rarity: "UNIQE",
            cardName: "CRYSTAL KAYDRA' S RING",
            cardSet: "DRAGON SET",
            id: "uniqu_kydra_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function mantaRingRareFun(){   
      var remove = 0;   
      if(mantaRingRare >= 3){

          Object.keys(inventoryObjectsRare).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsRare[id].id === 'rare_manta_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe').push({
            rarity: "UNIQE",
            cardName: "CRYSTAL MANTA' S RING",
            cardSet: "DRAGON SET",
            id: "uniqu_manta_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function obsidianRingRareFun(){   
      var remove = 0;   
      if(obsidianRingRare >= 3){

          Object.keys(inventoryObjectsRare).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsRare[id].id === 'rare_obsidian_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe').push({
            rarity: "UNIQE",
            cardName: "CRYSTAL TEAR RING",
            cardSet: "DRAGON SET",
            id: "uniqu_obsidian_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function fireRingRareFun(){   
      var remove = 0;   
      if(fireRingRare >= 3){

          Object.keys(inventoryObjectsRare).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsRare[id].id === 'rare_fire_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe').push({
            rarity: "UNIQE",
            cardName: "BLAZE' S RING",
            cardSet: "DRAGON SET",
            id: "uniqu_fire_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function tartarRingRareFun(){   
      var remove = 0;   
      if(tartarRingRare >= 3){

          Object.keys(inventoryObjectsRare).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsRare[id].id === 'rare_tartar_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/rare/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe').push({
            rarity: "UNIQE",
            cardName: "ACIANT DRAGON' S TOOTH",
            cardSet: "DRAGON SET",
            id: "uniqu_tartar_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    //unique fuse

    function tartarRingUniqeFun(){   
      var remove = 0;   
      if(tartarRingUniqe >= 3){

          Object.keys(inventoryObjectsUniqu).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUniqu[id].id === 'uniqu_tartar_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/chaos').push({
            rarity: "CHAOS",
            cardName: "CHAOS DRAGON' S TOOTH",
            cardSet: "DRAGON SET",
            id: "chaos_tartar_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function fireRingUniqeFun(){   
      var remove = 0;   
      if(fireRingUniqe >= 3){

          Object.keys(inventoryObjectsUniqu).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUniqu[id].id === 'uniqu_fire_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/chaos').push({
            rarity: "UNIQE",
            cardName: " CHAOS BLAZE' S RING",
            cardSet: "DRAGON SET",
            id: "chaos_fire_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function obsidianRingUniqeFun(){   
      var remove = 0;   
      if(obsidianRingUniqe >= 3){

          Object.keys(inventoryObjectsUniqu).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUniqu[id].id === 'uniqu_obsidian_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/chaos').push({
            rarity: "UNIQE",
            cardName: " CHAOS TEAR RING",
            cardSet: "DRAGON SET",
            id: "chaos_obsidian_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function mantaRingUniqeFun(){   
      var remove = 0;   
      if(mantaRingUniqe >= 3){

          Object.keys(inventoryObjectsUniqu).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUniqu[id].id === 'uniqu_manta_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/chaos').push({
            rarity: "UNIQE",
            cardName: "CHAOS MANTA' S RING",
            cardSet: "DRAGON SET",
            id: "chaos_manta_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }

    function kaydraRingUniqeFun(){   
      var remove = 0;   
      if(kaydraRingUniqe >= 3){

          Object.keys(inventoryObjectsUniqu).map(id => {
            if(remove >= 3){
              return;
            }
            if (inventoryObjectsUniqu[id].id === 'uniqu_kydra_ring') 
            { 
            database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/uniqe/' + id).remove()
            remove++
            }                       
          });       

        database.ref('users/' + firebase.auth().currentUser?.uid + '/inventory/chaos').push({
            rarity: "CHAOS",
            cardName: "CHAOS KAYDRA' S RING",
            cardSet: "DRAGON SET",
            id: "chaos_kydra_ring"
          })
        toast("Fusing complete");
    }       
        else toast("Fuse faild, you need at least 3 cards");
    }


      

    return(
        <IonPage>
          <IonHeader className='header'>
              <IonTitle className="title">The Game!</IonTitle>
          </IonHeader>
          <IonContent className="ion-padding">
            <h1>{username}'s Inventory</h1>
        <IonInfiniteScroll>
            {
                <IonList className="inventoryList">
                <IonText className="common">COMMON</IonText>
                <IonItem className="inventoryItem">
                <IonText className="commonRing">       
               <br /><br />
               Obsidian Ring: {obsidianRing} 
               <IonButton onClick={() => obisidianRingFun()} className="fuseBtn">Fuse Obsidian Ring</IonButton> <br /><br />
               Fire Ring: {fireRing}                    
               <IonButton onClick={() => fireRingFun()} className="fuseBtn">Fuse Fire Ring</IonButton> <br /><br />
               Tartar Ring: {tartarRing}
               <IonButton onClick={() => tartarRingFun()} className="fuseBtn">Fuse Tartar Ring</IonButton> <br /><br />
               Kaydra's Ring: {kaydraRing}
               <IonButton onClick={() =>  kaydraRingFun()} className="fuseBtn">Fuse Kaydra's Ring</IonButton> <br /><br />
               Manta's Ring: {mantaRing}
               <IonButton onClick={() => mantaRingFun()}className="fuseBtn">Fuse Manta's Ring</IonButton>                                        
               </IonText>
               </IonItem>
               </IonList>
              }

              {
                <IonList className="inventoryList">
                <IonText className="uncommon">UNCOMMON</IonText>
                <IonItem className="inventoryItem">
                <IonText className="uncommonRing">
                <br /><br /> 
                Obsidian Tear Ring: {obsidianRingUncommon}
                <IonButton onClick={() => obsidianRingUncommonFun()} className="fuseBtn">Fuse Obsidian Ring</IonButton> <br /><br />
                Magma Ring: {fireRingUncommon}
                <IonButton onClick={() => fireRingUncommonFun()} className="fuseBtn">Fuse Fire Ring</IonButton> <br /><br />
                Great Tartar Ring: {tartarRingUncommon}
                <IonButton onClick={() => tartarRingUncommonFun()} className="fuseBtn">Fuse Tartar Ring</IonButton> <br /><br />
                Golden Kaydra's Ring: {kaydraRingUncommon}
                <IonButton onClick={() =>  kaydraRingUncommonFun()} className="fuseBtn">Fuse Kaydra's Ring</IonButton> <br /><br />
                Golden Manta's Ring: {mantaRingUncommon}
                <IonButton onClick={() => mantaRingUncommonFun()}className="fuseBtn">Fuse Manta's Ring</IonButton>
                </IonText>
                </IonItem>
                </IonList>
              }

              {
                <IonList className="inventoryList">
                <IonText className="rare">RARE</IonText>
                <IonItem className="inventoryItem">
                <IonText className="rareRing">
                <br /><br /> 
                Dragon' s Tear ring: {obsidianRingRare}
                <IonButton onClick={() => obsidianRingRareFun()} className="fuseBtn">Fuse Obsidian Ring</IonButton> <br /><br />
                Lava Ring: {fireRingRare}
                <IonButton onClick={() => fireRingRareFun()} className="fuseBtn">Fuse Fire Ring</IonButton> <br /><br />
                Dragon' s Tooth: {tartarRingRare}
                <IonButton onClick={() => tartarRingRareFun()} className="fuseBtn">Fuse Tartar Ring</IonButton> <br /><br />
                Emeraldic Kaydra's Ring: {kaydraRingRare}
                <IonButton onClick={() =>  kaydraRingRareFun()} className="fuseBtn">Fuse Kaydra's Ring</IonButton> <br /><br />
                Emeraldic Manta's Ring: {mantaRingRare}
                <IonButton onClick={() => mantaRingRareFun()}className="fuseBtn">Fuse Manta's Ring</IonButton>
                </IonText>
                </IonItem>
                </IonList>
              }

              {
                <IonList className="inventoryList">
                <IonText className="uniqe">UNIQE</IonText>
                <IonItem className="inventoryItem">
                <IonText className="uniqeRing">
                <br /><br /> 
                Crystal Tear Ring: {obsidianRingUniqe}
                <IonButton onClick={() => obsidianRingUniqeFun()} className="fuseBtn">Fuse Obsidian Ring</IonButton> <br /><br />
                Blaze' s Ring: {fireRingUniqe}
                <IonButton onClick={() => fireRingUniqeFun()} className="fuseBtn">Fuse Fire Ring</IonButton> <br /><br />
                Aciant Dragon' s Tooth: {tartarRingUniqe}
                <IonButton onClick={() => tartarRingUniqeFun()} className="fuseBtn">Fuse Tartar Ring</IonButton> <br /><br />
                Crystal Kaydra's Ring: {kaydraRingUniqe}
                <IonButton onClick={() =>  kaydraRingUniqeFun()} className="fuseBtn">Fuse Kaydra's Ring</IonButton> <br /><br />
                Crystal Manta's Ring: {mantaRingUniqe}
                <IonButton onClick={() => mantaRingUniqeFun()}className="fuseBtn">Fuse Manta's Ring</IonButton>
                </IonText>
                </IonItem>
                </IonList>
              }

              {
                <IonList className="inventoryList">
                <IonText className="rainbow-textTitle">CHAOS</IonText>
                <IonItem className="inventoryItem">
                <IonText className="rainbow-text">
                <br /><br /> 
                Chaos Tear Ring: {obsidianRingChaos} <br /><br /> 
                Chaos Blaze' s Ring: {fireRingChaos} <br /><br /> 
                Chaos Dragon' s Tooth: {tartarRingChaos} <br /><br /> 
                Chaos Kaydra's Ring: {kaydraRingChaos} <br /><br /> 
                Chaos Manta's Ring: {mantaRingChaos}
                </IonText>
                </IonItem>
                </IonList>
              }
            </IonInfiniteScroll>
            <div className="btn">
            <IonButton fill="clear" className="back" routerLink="/User_page">Back</IonButton>
            </div>
          </IonContent>
        </IonPage>    
        
    )
}
export default Inventory;