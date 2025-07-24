import CartListItem from "./CartListItem";

const CartList = ({ list }) => {
	return (
		<ul>
			{list.map((item) => (
				<CartListItem key={item.id} item={item} />
			))}
		</ul>
	);
};
export default CartList;
