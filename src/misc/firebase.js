import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCzNwunJW0akuDAR2QaaE7_DbMk2IlPPqA',
  authDomain: 'chat-web-app-cf986.firebaseapp.com',
  databaseURL: 'https://chat-web-app-cf986-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-cf986',
  storageBucket: 'chat-web-app-cf986.appspot.com',
  messagingSenderId: '771811622342',
  appId: '1:771811622342:web:507aba4e3d1304272586c7',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
