import * as firebase from 'firebase';
import { toast } from '../theme/toast';

  const config = {
      apiKey: "AIzaSyA5czL5VufaRTIWJsbTL-bU4OqoGlbG0jI",
      authDomain: "thegame-9216c.firebaseapp.com",
      databaseURL: "https://thegame-9216c.firebaseio.com",
      projectId: "thegame-9216c",
      storageBucket: "thegame-9216c.appspot.com",
      messagingSenderId: "802350572094",
      appId: "1:802350572094:web:32faca86caa10e80eb676f",
      measurementId: "G-GHV7NVVJBF"
    }
    // Initialize Firebase
    firebase.initializeApp(config);
    firebase.analytics();
    export var database: firebase.database.Database;
    database = firebase.database();
    export const currUSer = firebase.auth()

    
    export function getCurrentUser() {
      return new Promise((resolve) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
          if(user){
            resolve(user)
            
          } else {
            resolve(null)
          }
          unsubscribe()

        })

      })

    }


  export function logoutUser(){
    return firebase.auth().signOut()
  }

  export async function loginUser(username:string, password: string) : Promise<any> {
    const email = `${username}@gmail.com`
    try{
    var res = await firebase.auth().signInWithEmailAndPassword(email,password);
    return res
    } 
    catch(error){
      toast(error.message)
    return false
    }


    
  }

  export async function registerUser(username:string, password: string) {
    const email = `${username}@gmail.com`

    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log(res)
      return true
    } catch (error){
        toast(error.message)
        return false
    }
    
  }
  
  export function GenerateCard(){
    var numb = 0;
    const toDbs = firebase.database().ref('users/' + firebase.auth().currentUser?.uid + '/<inventory>')
    
    const rand =  Math.floor(Math.random()* 5);
    var ref = database.ref('ListOfCards/' + rand)
    ref.on('value', gotData1, errData1);

      function gotData1(data:any){
      
      const cards = data.val();
      var keys = Object.keys(cards)
      for(var i = 0; i < keys.length;i++){
        var key = keys[i];
        var card = cards[key];
        var cardName = cards[key].cardName
        var cardSet = cards[key].card_set
        var cardRarity = cards[key].Rarity
        var cardValue = cards[key].value
        var cardValueName = cards[key].valueName
        var cardIDb = cards[key].cardID
        console.log(cardName,cardSet,cardRarity,cardValue,cardValueName,cardIDb)
        toDbs.push(card)
        numb++
      }

    }
    function errData1(err:any){
      console.log('Error!')
      console.log(err);
    }
  }

  export function GenerateCard1(){
  const toDbs = firebase.database().ref('users/' + firebase.auth().currentUser?.uid + '/inventory/common')
  const rand =  Math.floor(Math.random()* 5);  
  database.ref('ListOfCards/' + rand).on('value', gotData1, errData1);
  
  function gotData1(data:any){
    const datas = data.val()
    console.log(datas)
    toDbs.push(datas)   
  }
    function errData1(err:any){
      console.log('Error!')
      console.log(err);
    }
  }


  


  /*database.ref().push({
    ListOfCards: [{
      rarity: "COMMON",
      cardName: "OBSIDIAN RING",
      cardSet: "DRAGON SET",
      id: "obsidian_ring"
    },
    {
      rarity: "COMMON",
      cardName: "FIRE RING",
      cardSet: "DRAGON SET",
      id: "fire_ring"
    },
    {
      rarity: "COMMON",
      cardName: "TARTAR RING",
      cardSet: "DRAGON SET",
      id: "tartar_ring"
    },
    {
      rarity: "COMMON",
      cardName: "KYDRA' S RING",
      cardSet: "DRAGON SET",
      id: "kydra_ring"
    },
    {
      rarity: "COMMON",
      cardName: "MANTA' S RING",
      cardSet: "DRAGON SET",
      id: "manta_ring"
    }
  ]
  })*/

  
  



  
  








