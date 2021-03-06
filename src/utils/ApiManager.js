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
  user: {
    id: null,
    email: null,
  },
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

  getAllWhere(collectionName, where1, operator, where2) {
    this.initializeFirebase();
    this.initializeFirestore();

    return this.db.collection(collectionName)
      .where(where1, operator, where2)
      .get()
      .then((snapshots) => {
        const array = [];
        snapshots.forEach((snapshot) => {
          const item = snapshot.data();
          item.id = snapshot.id;
          array.push(item);
        });

        return array;
      });
  },

  getOne(collectionName, id) {
    this.initializeFirebase();
    this.initializeFirestore();

    return this.db.collection(collectionName).doc(id).get().then((doc) => {
      const item = doc.data();
      item.id = doc.id;

      return item;
    });
  },

  addDocument(collectionName, document) {
    this.initializeFirebase();
    this.initializeFirestore();

    return this.db.collection(collectionName).add(document);
  },

  setUser(user) {
    this.user = user;
  },

  getUser() {
    return this.user;
  },
};

export default ApiManager;
