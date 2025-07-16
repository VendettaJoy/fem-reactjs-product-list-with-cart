import { createContext, useReducer } from "react";

export const CartContext = createContext({
	items: [],
	totalPrice: 0,
	addItem: (_item) => {},
	removeItem: (_id) => {},
});

const DEFAULT_CART_STATE = {
	items: [],
	totalPrice: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			// add item
			break;
		case "REMOVE":
			// remove item
			break;
		default:
			return DEFAULT_CART_STATE;
	}
};

const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		DEFAULT_CART_STATE
	);

	const handleAddItem = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const handleRemoveItem = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
    }

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};
export default CartProvider;
