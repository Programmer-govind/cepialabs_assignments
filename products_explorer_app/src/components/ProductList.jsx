import ProductItem from "./ProductItem"

function ProductList({ products, updateFavorites }) {

    return (
        <div className="products">
            {products.map((p) => (
                <ProductItem key={p.id} product={p} updateFavorites={updateFavorites} />
            ))}
        </div>
    );
}

export default ProductList;