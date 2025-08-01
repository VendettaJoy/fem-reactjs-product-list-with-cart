import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductListItem from "./ProductListItem";
import classes from "./productList.module.css"

const ProductList = () => {
    const { menu } = useContext(CartContext);

	return (
		<section>
            <h1 className={classes.heading}>Desserts</h1>
			<ul className={classes.list}>
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
		</section>
	);
};
export default ProductList;
