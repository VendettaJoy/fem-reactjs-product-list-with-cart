const CheckoutModalListItem = ({ item }) => {
    const itemAmount = `${item.amount}x`
    const itemPrice = `$${item.price.toFixed(2)}`
	const totalPrice = `$${(item.price * item.amount).toFixed(2)}`;

	return (
		<li>
			<img src={`${item.image}`} alt="" />
			<p>{item.name}</p>
			<p>{itemAmount}</p>
			<p>{itemPrice}</p>
            <p>{totalPrice}</p>
		</li>
	);
};
export default CheckoutModalListItem;
