import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASY26u7M5qYhh6mAgngUuoaQKUq6rksfw',
  authDomain: 'smart-deals-f580c.firebaseapp.com',
  projectId: 'smart-deals-f580c',
  storageBucket: 'smart-deals-f580c.firebasestorage.app',
  messagingSenderId: '608270618567',
  appId: '1:608270618567:web:a73afdfd8c59df284ed3e2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
