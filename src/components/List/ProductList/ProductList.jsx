import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = ({ list }) => {
	return (
		<ul>
			{list.map((item, index) => (
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
	);
};
export default ProductList;
