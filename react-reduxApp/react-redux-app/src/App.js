import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cartItems";
function App() {
	return (
		<div className="App">
			<Navbar />
			<CartContainer cart={cartItems} />
		</div>
	);
}

export default App;
