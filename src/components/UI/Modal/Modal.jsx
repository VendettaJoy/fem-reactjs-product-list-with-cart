import classes from "./modal.module.css";

const Modal = ({ isOpen, children }) => {
	const ModalBackground = ({ children }) => {
		return <div className={classes.modalBg}>{children}</div>;
	};

	const ModalBox = ({ children }) => {
		return <div className={classes.modalBox}>{children}</div>;
	};

	return !isOpen ? null : (
		<ModalBackground>
			<ModalBox>{children}</ModalBox>
		</ModalBackground>
	);
};
export default Modal;
