import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const CartContext = createContext({
    menu: [],
    cart: [],
    totalPrice: 0,
    addItem: (_item) => {},
    removeItem: (_id) => {},
});

const DEFAULT_CART_STATE = {
	cart: [],
	totalPrice: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		// check if the item already exists in the cart
		const existingItemIndex = state.cart.findIndex(
			(item) => item.id == action.item.id
		);
		const existingItem = state.cart[existingItemIndex];

		let updatedCart;

		if (existingItem) {
			// if the item exists, update the amount
			const updatedItem = { ...existingItem, amount: action.item.amount };
			updatedCart = [...state.cart];

			// check to see if the amount of the item equals 0
			updatedItem.amount === 0
				? // if 0, remove from cart
				  (updatedCart = updatedCart.filter(
						(item) => item.id !== action.item.id
				  ))
				: // else update existing item with the new amount
				  (updatedCart[existingItemIndex] = updatedItem);
		} else {
			// if the item doesn't exist, add it to the cart
			updatedCart = state.cart.concat(action.item);
		}

		// calculate total order price using reduce
		const updatedTotalPrice = updatedCart.reduce((accumulator, item) => {
			return accumulator + item.amount * item.price;
		}, 0);

		return {
			cart: updatedCart,
			totalPrice: updatedTotalPrice,
		};
	}

	if (action.type === "REMOVE") {
		// remove item from cart using filter
		const updatedCart = state.cart.filter((item) => item.id !== action.id);
		// calculate total order price using reduce
		const updatedTotalPrice = updatedCart.reduce((accumulator, item) => {
			return accumulator + item.amount * item.price;
		}, 0);

		return {
			cart: updatedCart,
			totalPrice: updatedTotalPrice,
		};
	}

	return DEFAULT_CART_STATE;
};

const CartProvider = ({ children }) => {
	const [list, setList] = useState([]);
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		DEFAULT_CART_STATE
	);

	useEffect(() => {
		const getMenu = async () => {
			try {
				const response = await axios.get("/db/data.json");
				const menu = response.data;
				setList(menu);
			} catch (error) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			}
		};

		getMenu();
	}, []);

	const handleAddItem = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const handleRemoveItem = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};

	const cartContext = {
		menu: list,
		cart: cartState.cart,
		totalPrice: cartState.totalPrice,
		addItem: handleAddItem,
		removeItem: handleRemoveItem,
	};

	// console.log(cartState.cart, cartState.totalPrice);

	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
