import CartListItem from "./CartListItem";
import classes from "./cart.module.css"

const CartList = ({ list }) => {
	return (
		<ul className={classes.cartItems}>
			{list.map((item) => (
				<CartListItem key={item.id} item={item} />
			))}
		</ul>
	);
};
export default CartList;
