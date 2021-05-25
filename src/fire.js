import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyA1k8EnEEf1DGTg1twevuOg0Tno8DwpOAA",
    authDomain: "k-project-e94ca.firebaseapp.com",
    projectId: "k-project-e94ca",
    storageBucket: "k-project-e94ca.appspot.com",
    messagingSenderId: "405749989901",
    appId: "1:405749989901:web:776a008e01360a246a8b44",
    measurementId: "G-MPM38M5B34"
  };
  
  const fire = firebase.initializeApp(config);
  export default fire;  
 