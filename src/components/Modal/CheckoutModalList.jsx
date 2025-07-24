import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutModalListItem from "./CheckoutModalListItem";

const CheckoutModalList = () => {
	const { cart, totalPrice } = useContext(CartContext);
	const orderTotal = `$${totalPrice.toFixed(2)}`;

	return (
		<div>
			<ul>
				{cart.map((item) => (
					<CheckoutModalListItem item={item} />
				))}
			</ul>
			<p>Order Total</p>
			<p>{orderTotal}</p>
		</div>
	);
};
export default CheckoutModalList;
