import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "../UI/Modal/Modal";
import Check from "/images/icon-order-confirmed.svg";
import CheckoutModalList from "./CheckoutModalList";
import classes from "./checkoutModal.module.css";

const CheckoutModal = ({ isModalOpen, setIsModalOpen }) => {
	const { reset } = useContext(CartContext);

	const handleStayInModal = (event) => {
		// pressing either tab or shift+tab does nothing, keeping the user in the modal
		if (event.key.toLowerCase() === "tab" || event.shiftKey) {
			event.preventDefault();
		}

		// pressing escape triggers the start new order function
		if (event.key.toLowerCase() === "escape") {
			handleStartNewOrder();
		}
	};

	const handleStartNewOrder = () => {
		// reset cart
		reset();

		// close modal
		setIsModalOpen(false);

		// remove the modal-open class from the document body
		document.body.classList.remove("modal-open");

		// scroll to top
		window.scrollTo(0, 0);
	};

	return (
		<Modal
			isOpen={isModalOpen}
			role="dialog"
			label="dialog-label"
			desc="dialog-desc"
		>
			<div
				className={classes.orderConfirmation}
				onKeyDown={handleStayInModal}
			>
				<img src={Check} alt="" />
				<h1 id="dialog-label">Order Confirmed</h1>
				<p id="dialog-desc">We hope you enjoy your food!</p>
				<CheckoutModalList />
				<button
					autoFocus
					type="button"
					onClick={handleStartNewOrder}
					className={classes.newOrderBtn}
				>
					Start New Order
				</button>
			</div>
		</Modal>
	);
};
export default CheckoutModal;
