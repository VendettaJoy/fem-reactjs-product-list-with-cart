import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "/images/icon-add-to-cart.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import classes from "./productList.module.css";

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
			});
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
		<li role="listitem" className={classes.item}>
			<div className={classes.container}>
				<picture>
					<source
						media="(width > 600px )"
						srcSet={`${image.tablet}`}
					/>
					<source
						media="(width > 1200px )"
						srcSet={`${image.desktop}`}
					/>
					<img
						src={`${image.mobile}`}
						alt=""
						className={
							amount > 0
								? `${classes.image} ${classes.selected}`
								: `${classes.image}`
						}
					/>
				</picture>
				{/* if item amount is less than 1 */}
				{amount < 1 && (
					<button
						type="button"
						onClick={handleAddToCartClick}
						className={`${classes.pill} ${classes.btnAddToCart}`}
						aria-label={`add ${name} to cart`}
					>
						<img src={CartIcon} alt="" aria-hidden="true" />
						Add to Cart
					</button>
				)}
				{/* if item amount is greater than or equal to 1 */}
				{amount >= 1 && (
					<div className={`${classes.pill} ${classes.btnAmount}`}>
						<button
							autoFocus
							type="button"
							onClick={handleDecrement}
							className={classes.amountToggle}
							aria-label={`remove 1 ${name} from cart`}
						>
							<img
								src={DecrementIcon}
								alt=""
								aria-hidden="true"
							/>
						</button>
						{amount}
						<button
							type="button"
							onClick={handleIncrement}
							className={classes.amountToggle}
							aria-label={`add 1 more ${name} to cart`}
						>
							<img
								src={IncrementIcon}
								alt=""
								aria-hidden="true"
							/>
						</button>
					</div>
				)}
			</div>
			<p className={classes.itemCategory} aria-label="product category">
				{category}
			</p>
			<p className={classes.itemName} aria-label="product name">
				{name}
			</p>
			<p className={classes.itemPrice} aria-label="product price">
				{itemPrice}
			</p>
		</li>
	);
};
export default ProductListItem;
