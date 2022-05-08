import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { db } from "./firebase";
import { onValue, ref } from "firebase/database";
function App() {
	const [state, setState] = useState([]);
	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				Object.values(data).map((val) => {
					setState((oldArr) => [...oldArr, ...val]);
				});
			}
		});
	}, []);

	const mapStyles = {
		width: "100%",
		height: "100%",
	};
	const displayMarkers = () => {
		return state.map((store, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: store.latitude,
						lng: store.longitude,
					}}
				/>
			);
		});
	};
	return (
		<Map
			google={window.google}
			zoom={8}
			style={mapStyles}
			initialCenter={{ lat: 47.444, lng: -122.176 }}
		>
			{displayMarkers()}
		</Map>
	);
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBapHbGUTFy0R187aWxdEggA8dQb48I8tM",
})(App);
