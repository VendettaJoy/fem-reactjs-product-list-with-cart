import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "../UI/Modal/Modal";
import Check from "/images/icon-order-confirmed.svg";
import CheckoutModalList from "./CheckoutModalList";

const CheckoutModal = ({ isModalOpen, setIsModalOpen }) => {
	const { reset } = useContext(CartContext);

	const handleStartNewOrder = () => {
		// reset cart
		reset();

		// close modal
		setIsModalOpen(false);

		// remove the modal-open class from the document body
		document.body.classList.remove("modal-open");
	};

	return (
		<Modal isOpen={isModalOpen}>
			<img src={Check} alt="" />
			<h1>Order Confirmed</h1>
			<p>We hope you enjoy your food!</p>
			<CheckoutModalList />
			<button type="button" onClick={handleStartNewOrder}>
				Start New Order
			</button>
		</Modal>
	);
};
export default CheckoutModal;