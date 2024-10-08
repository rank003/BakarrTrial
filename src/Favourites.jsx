
import { useDispatch, useSelector } from 'react-redux';
import { removeDogFavorite, removeCatFavorite } from './features/favorites/favoritesSlice'; // Import the actions
import "./fav.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const dogFavorites = useSelector((state) => state.favorites.dogFavorites);
  const catFavorites = useSelector((state) => state.favorites.catFavorites);

  // Remove breed from favorites
  const removeFromFavorites = (breedId, type) => {
    if (type === 'dog') {
      dispatch(removeDogFavorite(breedId)); // Dispatch remove dog action
    } else {
      dispatch(removeCatFavorite(breedId)); // Dispatch remove cat action
    }
  };

  return (
    <div className="favorites-container">
      <h2>Your Favorite Breeds</h2>
      <div className="ad"> 
        <button className="logout-btn">
          <a href="/cat">Cat Search</a>
        </button>
        <button className="logout-btn">
          <a href="/dog">Dog Search</a>
        </button>
      </div>
      
      <div className="favorites-columns">
        {/* Dog Favorites Column */}
        <div className="favorites-column">
          <h3>Dog Favorites</h3>
          {dogFavorites.length > 0 ? (
            <ul>
              {dogFavorites.map((breed) => (
                <li key={breed.id}>
                  {breed.name}
                  <button onClick={() => removeFromFavorites(breed.id, 'dog')}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No dog favorites yet.</p>
          )}
        </div>

        {/* Cat Favorites Column */}
        <div className="favorites-column">
          <h3>Cat Favorites</h3>
          {catFavorites.length > 0 ? (
            <ul>
              {catFavorites.map((breed) => (
                <li key={breed.id}>
                  {breed.name}
                  <button onClick={() => removeFromFavorites(breed.id, 'cat')}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No cat favorites yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
