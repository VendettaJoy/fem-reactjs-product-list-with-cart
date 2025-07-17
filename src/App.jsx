import { useEffect, useState } from "react";
import axios from "axios";
import CartProvider from "./context/CartContext";
import ProductList from "./components/List/ProductList/ProductList";
import Cart from "./components/Cart/Cart/Cart";

const App = () => {
	const [list, setList] = useState([]);

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

	return (
		<CartProvider>
			<main>
				<ProductList list={list} />
                <Cart />
			</main>
		</CartProvider>
	);
};
export default App;
