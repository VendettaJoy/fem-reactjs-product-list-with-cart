import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CrossIcon from "/images/icon-remove-item.svg";
import classes from "./cart.module.css";

const CartListItem = ({ item }) => {
	const { removeItem } = useContext(CartContext);

	const itemAmount = `${item.amount}x`;
	const itemPrice = `@ $${item.price.toFixed(2)}`;
	const totalPrice = `$${(item.price * item.amount).toFixed(2)}`;

	return (
		<li className={classes.cartItem}>
			{/* <img src={`${item.image}`} alt="" /> */}
			<div className={classes.cartItemInfo}>
				<p>{item.name}</p>
				<div className={classes.cartItemAmtPrice}>
					<p>{itemAmount}</p>
					<p>{itemPrice}</p>
					<p>{totalPrice}</p>
				</div>
			</div>
			<button
				type="button"
				onClick={() => removeItem(item)}
				className={classes.cartItemDelBtn}
                aria-label={`remove ${item.name} from cart`}
			>
				<img src={CrossIcon} alt="" />
			</button>
		</li>
	);
};
export default CartListItem;
