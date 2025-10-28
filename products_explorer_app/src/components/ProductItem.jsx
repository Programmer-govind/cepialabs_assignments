import { useEffect, useState } from "react";

function ProductItem({ product }) {

    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFavourite(favourites.some((p) => p.id === product.id));
  }, [product.id]);

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    let updatedFavourites;

    if (isFavourite) {
      updatedFavourites = favourites.filter((p) => p.id !== product.id);
    } else {
      updatedFavourites = [...favourites, product];
    }

    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setIsFavourite(!isFavourite);
  };

    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: $ {product.price}</p>
            <p>Rating: {product.rating}</p>
            <button
        onClick={toggleFavourite}
        style={{
          backgroundColor: isFavourite ? "crimson" : "#ccc",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isFavourite ? "❤️ Remove" : "🤍 Favourite"}
      </button>
        </div>
    );
}

export default ProductItem;