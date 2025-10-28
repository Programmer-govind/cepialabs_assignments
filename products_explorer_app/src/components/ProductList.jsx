import ProductItem from "./ProductItem"

function ProductList({ products }) {

    return (
        <div className="products">
            {products.map((p) => (
                <ProductItem key={p.id} product={p} />
            ))}
        </div>
    );
}

export default ProductList;