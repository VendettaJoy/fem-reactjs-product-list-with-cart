import { useState } from "react";
import CartProvider from "./context/CartContext";
import ProductList from "./components/List/ProductList";
import Cart from "./components/Cart/Cart";
import CheckoutModal from "./components/Modal/CheckoutModal";
import "./App.css"

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<CartProvider>
			<main className="App">
				<ProductList />
				<Cart setIsModalOpen={setIsModalOpen} />
				<CheckoutModal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
			</main>
		</CartProvider>
	);
};
export default App;
