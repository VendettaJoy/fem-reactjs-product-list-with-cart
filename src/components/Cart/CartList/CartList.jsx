import CartListItem from "../CartListItem/CartListItem";

const CartList = ({ list }) => {
	return (
		<ul>
			{list.map((item) => (
				<CartListItem
					key={item.id}
					id={item.id}
					image={item.image}
					name={item.name}
					amount={item.amount}
					price={item.price}
				/>
			))}
		</ul>
	);
};
export default CartList;
