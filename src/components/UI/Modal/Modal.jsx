import classes from "./modal.module.css";

const Modal = ({ isOpen, role, label, desc, children }) => {
	const ModalBackground = ({ children }) => {
		return <div className={classes.modalBg}>{children}</div>;
	};

	const ModalBox = ({ children }) => {
		return (
			<div
				className={classes.modalBox}
				role={role}
                aria-modal="true"
				aria-labelledby={label}
				aria-describedby={desc}
			>
				{children}
			</div>
		);
	};

	return !isOpen ? null : (
		<ModalBackground>
			<ModalBox>{children}</ModalBox>
		</ModalBackground>
	);
};
export default Modal;
