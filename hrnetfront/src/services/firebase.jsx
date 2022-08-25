// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAG4cVbxmIFooLCAot4BL5I4l4t__BsDTM",
	authDomain: "hrnet-4789f.firebaseapp.com",
	projectId: "hrnet-4789f",
	storageBucket: "hrnet-4789f.appspot.com",
	messagingSenderId: "90254341863",
	appId: "1:90254341863:web:2a7e8fd97aeb43ddd31442",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
