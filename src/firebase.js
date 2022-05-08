import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDa9913OZkNZCcuRy6T_fpTbaB-lAR3-so",
	authDomain: "anomaly-location-data.firebaseapp.com",
	databaseURL: "https://anomaly-location-data-default-rtdb.firebaseio.com",
	projectId: "anomaly-location-data",
	storageBucket: "anomaly-location-data.appspot.com",
	messagingSenderId: "999492609246",
	appId: "1:999492609246:web:068b15e94e42b25b924e4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
