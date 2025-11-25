import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, clearFavorites } from '../redux/favoritesSlice';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  const handleClearAll = () => {
    dispatch(clearFavorites());
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <>
          <button onClick={handleClearAll}>Clear All</button>
          <ul>
            {favorites.map(student => (
              <li key={student.id}>
                {student.name} - {student.email}
                <button onClick={() => handleRemove(student.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Favorites;