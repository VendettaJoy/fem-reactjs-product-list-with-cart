import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutModalListItem from "./CheckoutModalListItem";
import classes from "./checkoutModal.module.css";

const CheckoutModalList = () => {
	const { cart, totalPrice } = useContext(CartContext);
	const orderTotal = `$${totalPrice.toFixed(2)}`;

	return (
		<div className={classes.orderSummary}>
			<ul>
				{cart.map((item) => (
					<CheckoutModalListItem item={item} />
				))}
			</ul>
			<div className={classes.orderTotal}>
				<p>Order Total</p>
				<p>{orderTotal}</p>
			</div>
		</div>
	);
};
export default CheckoutModalList;
