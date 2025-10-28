import { useEffect, useState } from "react";

function ProductItem({ product, updateFavorites }) {

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((p) => p.id === product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((p) => p.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }

    updateFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: $ {product.price}</p>
            <p>Rating: {product.rating}</p>
            <button
        onClick={toggleFavorite}
        style={{
          backgroundColor: isFavorite ? "crimson" : "#ccc",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "❤️ Remove" : "🤍 Favorite"}
      </button>
        </div>
    );
}

export default ProductItem;