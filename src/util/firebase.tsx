// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQfXTasOves6_bY5LgkBYr6ygnlmZZKZw',
  authDomain: 'todo-app-f29fb.firebaseapp.com',
  projectId: 'todo-app-f29fb',
  storageBucket: 'todo-app-f29fb.appspot.com',
  messagingSenderId: '651039945291',
  appId: '1:651039945291:web:1510e74cfa10e8c98693ce',
  measurementId: 'G-81JJ1HN09B',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
