import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CrossIcon from "/images/icon-remove-item.svg";

const CartListItem = ({ id, image, name, amount, price }) => {
	const { removeItem } = useContext(CartContext);

	const itemAmount = `${amount}x`;
	const itemPrice = `@ $${price.toFixed(2)}`;
	const totalPrice = `$${(price * amount).toFixed(2)}`;

	return (
		<li>
			<img src={`${image}`} alt="" />
			<p>{name}</p>
			<p>{itemAmount}</p>
			<p>{itemPrice}</p>
			<p>{totalPrice}</p>
			<button type="button" onClick={() => removeItem(id)}>
				<img src={CrossIcon} alt="" />
			</button>
		</li>
	);
};
export default CartListItem;
