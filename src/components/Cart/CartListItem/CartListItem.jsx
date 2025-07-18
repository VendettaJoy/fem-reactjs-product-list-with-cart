import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CrossIcon from "/images/icon-remove-item.svg";

const CartListItem = ({ item }) => {
	const { removeItem } = useContext(CartContext);

	const itemAmount = `${item.amount}x`;
	const itemPrice = `@ $${item.price.toFixed(2)}`;
	const totalPrice = `$${(item.price * item.amount).toFixed(2)}`;

	return (
		<li>
			<img src={`${item.image}`} alt="" />
			<p>{item.name}</p>
			<p>{itemAmount}</p>
			<p>{itemPrice}</p>
			<p>{totalPrice}</p>
			<button type="button" onClick={() => removeItem(item)}>
				<img src={CrossIcon} alt="" />
			</button>
		</li>
	);
};
export default CartListItem;
