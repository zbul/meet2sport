import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

const ApiManager = {
  userId: null,
  firebaseApp: null,

  initializeFirebase() {
    if (!this.firebaseApp) {
      this.firebaseApp = firebase.initializeApp({
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
      });
    }
  },

  signIn(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  setUserId(userId) {
    this.userId = userId;
  },

  getUserId() {
    return this.userId;
  },
};

export default ApiManager;
