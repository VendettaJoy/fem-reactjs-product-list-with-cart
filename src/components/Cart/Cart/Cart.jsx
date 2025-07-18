import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import EmptyCartIllustration from "/images/illustration-empty-cart.svg";
import CartList from "../CartList/CartList";

const Cart = () => {
	const { cart, totalPrice } = useContext(CartContext);

	const totalItemsInCart = cart.reduce((accumulator, item) => {
		return accumulator + item.amount;
	}, 0);
	const orderTotal = `$${totalPrice.toFixed(2)}`;

	return (
		<>
			<h2>Your Cart ({totalItemsInCart})</h2>
			{cart.length > 0 ? (
				<div>
					<CartList list={cart} />
					<p>Order Total {orderTotal}</p>
                    <button type="button">Confirm Order</button>
				</div>
			) : (
				<div>
					<img src={EmptyCartIllustration} alt=""></img>
					<p>Your added items will appear here</p>
				</div>
			)}
		</>
	);
};
export default Cart;
