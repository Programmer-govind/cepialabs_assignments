import { createSlice } from '@reduxjs/toolkit';

// Helper function to load favorites from localStorage
const loadFavoritesFromStorage = () => {
  try {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading favorites from localStorage:', error);
    return [];
  }
};

// Helper function to save favorites to localStorage
const saveFavoritesToStorage = (favorites) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error);
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: loadFavoritesFromStorage(),
  },
  reducers: {
    addFavorite: (state, action) => {
      const student = action.payload;
      if (!state.favorites.find(fav => fav.id === student.id)) {
        state.favorites.push(student);
        saveFavoritesToStorage(state.favorites);
      }
    },
    removeFavorite: (state, action) => {
      const studentId = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== studentId);
      saveFavoritesToStorage(state.favorites);
    },
    clearFavorites: (state) => {
      state.favorites = [];
      saveFavoritesToStorage(state.favorites);
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;