import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "/images/icon-add-to-cart.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";

const ProductListItem = ({ id, image, category, name, price }) => {
	const { addItem, removeItem } = useContext(CartContext);
	const [amount, setAmount] = useState(0);

	const itemPrice = `$${price.toFixed(2)}`;

	useEffect(() => {
		if (amount > 0) {
			addItem({
				id: id,
				image: image.thumbnail,
				name: name,
				amount: amount,
				price: price,
				setAmount: setAmount,
			});
		} else {
            removeItem({
                id: id,
				setAmount: setAmount,
            })
        }
	}, [amount]);

	const handleAddToCartClick = () => {
		setAmount(1);
	};

	const handleIncrement = () => {
		setAmount((prevAmount) => prevAmount + 1);
	};

	const handleDecrement = () => {
		setAmount((prevAmount) => prevAmount - 1);
	};

	return (
		<li>
			<picture>
				<source media="(width > 600px )" srcSet={`${image.tablet}`} />
				<source media="(width > 1200px )" srcSet={`${image.desktop}`} />
				<img src={`${image.mobile}`} alt="" />
			</picture>

			{/* if item amount is less than 1 */}
			{amount < 1 && (
				<button type="button" onClick={handleAddToCartClick}>
					<img src={CartIcon} alt="" />
					Add to Cart
				</button>
			)}

			{/* if item amount is greater than or equal to 1 */}
			{amount >= 1 && (
				<>
					<button type="button" onClick={handleDecrement}>
						<img src={DecrementIcon} alt="" />
					</button>
					{amount}
					<button type="button" onClick={handleIncrement}>
						<img src={IncrementIcon} alt="" />
					</button>
				</>
			)}

			<p>{category}</p>
			<h2>{name}</h2>
			<p>{itemPrice}</p>
		</li>
	);
};
export default ProductListItem;
