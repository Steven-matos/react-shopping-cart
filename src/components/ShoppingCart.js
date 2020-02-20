import React from 'react';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {
	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.item.price;
		}, 0).toFixed(2);
	};

	console.log('Shopping cart',props.cart)

	return (
		<div className="shopping-cart">
			{props.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
