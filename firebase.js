import * as firebase from 'firebase'
import * as store from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD_nJuObsymuk82AkQRzitv6H7Tdao_0Wg",
  authDomain: "health-share-a0bc6.firebaseapp.com",
  databaseURL: "https://health-share-a0bc6.firebaseio.com",
  projectId: "health-share-a0bc6",
  storageBucket: "health-share-a0bc6.appspot.com",
  messagingSenderId: "516403798393",
  appId: "1:516403798393:web:5292aecba3e580a3364fa8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()