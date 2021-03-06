import React from "react";
import CartItem from "./CartItem";
const CartContainer = ({ cart = [] }) => {
	return (
		<section className="cart">
			{/* cart header */}
			<header>
				<h2>your bag</h2>
			</header>
			{/* cart items */}
			<article>
				{cart.map(item => {
					return <CartItem key={item.id} {...item} />;
				})}
			</article>
			{/* cart footer */}
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>$0.00</span>
					</h4>
				</div>
				<button className="btn clear-btn">clear cart</button>
			</footer>
		</section>
	);
};

export default CartContainer;
