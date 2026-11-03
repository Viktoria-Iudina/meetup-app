import { createContext, useState } from "react";

// 1. initializing context with an epmty object as its initial value set to zero because by default we dont have any favorites
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});

// 2. providing the context via the function component, which updates the context values
function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  // 5. add to favorites based on the previous state 
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      // "pushing" the new object containing the added favorite
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  // 6. filterig out the item if the meetup.id matches the parameter
  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  // 7. checking if the returned item is = to the parameter
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  // 4. updating context values with the help of useState (passing it as a value prop) 
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length
  };

  // 3. the context component will wrap all other components which are concerned by updating the favorites values
  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}