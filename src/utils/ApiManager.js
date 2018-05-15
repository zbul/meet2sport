import firebase from 'firebase';
import '@firebase/firestore';

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
  db: null,

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

  initializeFirestore() {
    if (!this.db) {
      this.db = firebase.firestore();
      this.db.settings({
        timestampsInSnapshots: true,
      });
    }
  },

  signIn(email, password) {
    this.initializeFirebase();
    return this.firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  },

  signInWithGoogle() {
    return true;
  },

  login(email, password) {
    this.initializeFirebase();
    return this.firebaseApp.auth().signInWithEmailAndPassword(email, password);
  },

  getAll(collectionName) {
    this.initializeFirebase();
    this.initializeFirestore();

    return this.db.collection(collectionName).get().then((snapshots) => {
      const array = [];
      snapshots.forEach((snapshot) => {
        const item = snapshot.data();
        item.id = snapshot.id;
        array.push(item);
      });

      return array;
    });
  },

  addDocument(collectionName, document) {
    this.initializeFirebase();
    this.initializeFirestore();

    return this.db.collection(collectionName).add(document);
  },

  setUserId(userId) {
    this.userId = userId;
  },

  getUserId() {
    return this.userId;
  },
};

export default ApiManager;
