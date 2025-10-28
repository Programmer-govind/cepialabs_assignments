import { useState } from 'react';

function Favorites({ favoritesCount, onShowFavorites, isShowingFavorites }) {
  return (
    <div className="favorites-section">
      <button
        className={`favorites-btn ${isShowingFavorites ? 'active' : ''}`}
        onClick={onShowFavorites}
      >
        ❤️ Favorites
        {favoritesCount > 0 && (
          <span className="favorites-badge">{favoritesCount}</span>
        )}
      </button>
    </div>
  );
}

export default Favorites;