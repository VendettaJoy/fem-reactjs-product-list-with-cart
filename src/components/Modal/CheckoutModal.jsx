import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "../UI/Modal/Modal";
import Check from "/images/icon-order-confirmed.svg";
import CheckoutModalList from "./CheckoutModalList";
import classes from "./checkoutModal.module.css";

const CheckoutModal = ({ isModalOpen, setIsModalOpen }) => {
	const { reset } = useContext(CartContext);

	const handleStartNewOrder = () => {
		// reset cart
		reset();

		// close modal
		setIsModalOpen(false);

		// remove the modal-open class from the document body
		document.body.classList.remove("modal-open");

        // scroll to top
        window.scrollTo(0,0);
	};

	return (
		<Modal isOpen={isModalOpen}>
			<div className={classes.orderConfirmation}>
				<img src={Check} alt="" />
				<h1>Order Confirmed</h1>
				<p>We hope you enjoy your food!</p>
				<CheckoutModalList />
				<button
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
