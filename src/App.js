import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Context
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const removeItem = item => {
		console.log('remove item',item)
		let removeMovie = cart.filter(items => items.id !== item)
		console.log('updated cart', cart)
		setCart(removeMovie)
	}

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};



	console.log(cart)
	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />

					{/* Routes */}
				
					<Route
						exact
						path="/"
						render={() => (
							<Products />
						)}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart />}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
