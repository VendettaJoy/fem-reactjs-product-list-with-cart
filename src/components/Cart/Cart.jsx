import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "./CartList";
import EmptyCartIllustration from "/images/illustration-empty-cart.svg";
import CarbonNeutralIcon from "/images/icon-carbon-neutral.svg";
import classes from "./cart.module.css";

const Cart = ({ setIsModalOpen }) => {
	const { cart, totalPrice } = useContext(CartContext);

	const totalItemsInCart = cart.reduce((accumulator, item) => {
		return accumulator + item.amount;
	}, 0);
	const orderTotal = `$${totalPrice.toFixed(2)}`;

	const cartStyles =
		cart.length > 0
			? `${classes.cartContent} ${classes.cartNotEmpty}`
			: `${classes.cartContent} ${classes.cartEmpty}`;

	const handleConfirmOrder = () => {
		// open modal
		setIsModalOpen(true);

		// add the modal-open class to the document body
		document.body.classList.add("modal-open");
	};

	return (
		<div role="region" className={classes.cart}>
			<h2 className={classes.cartHeading}>
				Your Cart ({totalItemsInCart})
			</h2>
			<div className={cartStyles}>
				{cart.length > 0 ? (
					<>
						<CartList list={cart} />
						<p>
							Order Total{" "}
							<span className={classes.cartTotal}>
								{orderTotal}
							</span>
						</p>
						<div className={classes.cartDelivery}>
							<img
								src={CarbonNeutralIcon}
								alt=""
								aria-hidden="true"
							/>
							<p>This is a <span>carbon-neutral</span> delivery</p>
						</div>
						<button
							type="button"
							onClick={handleConfirmOrder}
							className={classes.cartConfirmBtn}
						>
							Confirm Order
						</button>
					</>
				) : (
					<>
						<img src={EmptyCartIllustration} alt=""></img>
						<p className={classes.cartEmptyText}>
							Your added items will appear here
						</p>
					</>
				)}
			</div>
		</div>
	);
};
export default Cart;
