import { useState, useEffect, useMemo } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import NoResults from './components/NoResults';
import ThemeToggle from './components/ThemeToggle';
import Favorites from './components/Favorites';

function App() {


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      return JSON.parse(saved);
    }
    // Migrate from old "favourites" key if it exists
    const oldSaved = localStorage.getItem('favourites');
    if (oldSaved) {
      const migrated = JSON.parse(oldSaved);
      localStorage.setItem('favorites', JSON.stringify(migrated));
      localStorage.removeItem('favourites'); // Clean up old key
      return migrated;
    }
    return [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  const limit = 12;

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [selectedCategory, page]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
    setPage(0);
  };

  const updateFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const skip = page * limit;
      const url = selectedCategory ? `https://dummyjson.com/products/category/${selectedCategory}?limit=${limit}&skip=${skip}` : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);

    } catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to load categories:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(0);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setPage(0);
  };

  const filteredProducts = useMemo(() => {
    if (showFavorites) {
      return favorites;
    }
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm, favorites, showFavorites]);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <h1>Products Explorer Application</h1>
      <div className="controls-section">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Favorites
          favoritesCount={favorites.length}
          onShowFavorites={handleShowFavorites}
          isShowingFavorites={showFavorites}
        />
      </div>
      {!showFavorites && (
        <>
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <CategoryFilter categories={categories} onSelectCategory={handleCategoryChange} />
        </>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : filteredProducts.length === 0 ? (
        showFavorites ? (
          <h3 style={{ marginTop: "30px", color: "#555" }}>No favorites yet. Add some products to your favorites!</h3>
        ) : (
          <NoResults />
        )
      ) : (
        <>
        <ProductList products={filteredProducts} updateFavorites={updateFavorites} />
        {!showFavorites && (
          <div className="pagination">
            <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <span>Page {page + 1} </span>
            <button onClick={()=> setPage(page + 1)} disabled={(page + 1) * limit >= total}>Next</button>
          </div>
        )}
        </>
      )}
    </div>
  );
}

export default App;
