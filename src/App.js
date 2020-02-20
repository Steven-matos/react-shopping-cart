import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Context
import {ProductContext} from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, {item}])
	};

	console.log(cart)
	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<Route
					exact
					path="/"
					render={() => (
						<Products />
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
