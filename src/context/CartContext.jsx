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
	if (action.type === "ADD") {
		// check if the item already exists in the cart
		const existingItemIndex = state.items.findIndex(
			(item) => item.id == action.item.id
		);
		const existingItem = state.items[existingItemIndex];

		let updatedItems;

		if (existingItem) {
			// if the item exists, update the amount
			const updatedItem = { ...existingItem, amount: action.item.amount };
			updatedItems = [...state.items];

			// check to see if the amount of the item equals 0
			updatedItem.amount === 0
				? // if 0, remove from cart
				  (updatedItems = updatedItems.filter(
						(item) => item.id !== action.item.id
				  ))
				: // else update existing item with the new amount
				  (updatedItems[existingItemIndex] = updatedItem);
		} else {
			// if the item doesn't exist, add it to the cart
			updatedItems = state.items.concat(action.item);
		}

		// calculate total order price using reduce
		const updatedTotalPrice = updatedItems.reduce((accumulator, item) => {
			return accumulator + item.amount * item.price;
		}, 0);

		return {
			items: updatedItems,
			totalPrice: updatedTotalPrice,
		};
	}

	if (action.type === "REMOVE") {
        // remove item
	}

	return DEFAULT_CART_STATE;
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
	};

	console.log(cartState.items, cartState.totalPrice);

	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
