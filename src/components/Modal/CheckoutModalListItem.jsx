import classes from "./checkoutModal.module.css";

const CheckoutModalListItem = ({ item }) => {
	const itemAmount = `${item.amount}x`;
	const itemPrice = `@ $${item.price.toFixed(2)}`;
	const totalPrice = `$${(item.price * item.amount).toFixed(2)}`;

	return (
		<li className={classes.orderSummaryItem}>
			<img src={`${item.image}`} alt="" />
			<div>
				<p>{item.name}</p>
				<div>
					<p>{itemAmount}</p>
					<p>{itemPrice}</p>
				</div>
			</div>
			<p>{totalPrice}</p>
		</li>
	);
};
export default CheckoutModalListItem;
