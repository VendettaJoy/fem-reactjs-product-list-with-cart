import CartProvider from "./context/CartContext";
import ProductList from "./components/List/ProductList/ProductList";
import Cart from "./components/Cart/Cart/Cart";

const App = () => {
	return (
		<CartProvider>
			<main>
				<ProductList />
                <Cart />
			</main>
		</CartProvider>
	);
};
export default App;
