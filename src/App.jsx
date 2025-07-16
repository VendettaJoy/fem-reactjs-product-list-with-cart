import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import axios from "axios";

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
		<main>
			<ProductList list={list} />
		</main>
	);
};
export default App;
