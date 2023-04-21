// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: 'AIzaSyALi9LNur0EB0rNCrRCX7GY33X3OAUmdsk',
	authDomain: 'desafios-da-existencia.firebaseapp.com',
	projectId: 'desafios-da-existencia',
	storageBucket: 'desafios-da-existencia.appspot.com',
	messagingSenderId: '797141794104',
	appId: '1:797141794104:web:2f40b505c71537c7fe15cd',
	measurementId: 'G-ETJ6S333BC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
}
