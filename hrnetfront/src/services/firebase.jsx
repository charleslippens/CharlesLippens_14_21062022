import app from "firebase/compat/app";
import firebaseConfig from "./firebase_config.jsx";
import "firebase/compat/firestore";

class Firebase {
	constructor() {
		//To avoid reinitialisation twice
		if (!app.apps.length) {
			app.initializeApp(firebaseConfig);
		}
		this.db = app.firestore();
	}
}
const firebase = new Firebase();
export default firebase;
