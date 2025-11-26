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
          <button onClick={handleClearAll} className="btn btn-secondary">Clear All</button>
          <ul>
            {favorites.map(student => (
              <li key={student.id}>
                <div>
                  <img src={student.image} alt={student.firstName} style={{width: '50px', height: '50px', borderRadius: '50%', marginRight: '1rem'}} />
                  {student.firstName} {student.lastName} - {student.email}
                </div>
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