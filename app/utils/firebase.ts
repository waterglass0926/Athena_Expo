import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDDtZx8y6xowiyw0R-xwhRZ6lt9vcRdURA',
  authDomain: 'athena-1127.firebaseapp.com',
  projectId: 'athena-1127',
  storageBucket: 'athena-1127.appspot.com',
  messagingSenderId: '120668541539',
  appId: '1:120668541539:web:ba8a779e88b85f88691e56'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const timestamp = serverTimestamp();

export { auth, db, timestamp };