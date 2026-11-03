import { createContext, useState } from "react";

// 1. initializing context with an epmty object as its initial value set to zero because by default we dont have any favorites
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});

// 2. providing the context via the function component, which updates the context values
function FavoritesContextProvider(props) {

  const [userFavorites, setUserFavorites] = useState([]);

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