import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = () => {
    const { menu } = useContext(CartContext);

	return (
		<>
            <h1>Desserts</h1>
			<ul>
				{menu.map((item, index) => (
					<ProductListItem
						key={index}
						id={index}
						image={item.image}
						category={item.category}
						name={item.name}
						price={item.price}
					/>
				))}
			</ul>
		</>
	);
};
export default ProductList;
