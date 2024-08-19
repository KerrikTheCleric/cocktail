import { createContext, ReactElement, ReactNode, useState } from "react";
import { ICocktail, ICocktailContext } from "../interfaces";

interface ICocktailProviderProps {
  children: ReactNode;
}

export const CocktailContext = createContext<ICocktailContext>({} as ICocktailContext);

export function CocktailProvider({ children }: ICocktailProviderProps): ReactElement {
  const [landingCocktail, setLandingCocktail] = useState<ICocktail>({
    id: "",
    title: "",
    tags: [],
    category: "",
    glass: "",
    ingredients: [],
    measurements: [],
    imageLink: ""
  });
  const [cocktailSearchResults, setCocktailSearchResults] = useState<ICocktail[]>([]);
  const [detailedCocktail, setDetailedCocktail] = useState<ICocktail>({
    id: "",
    title: "",
    tags: [],
    category: "",
    glass: "",
    ingredients: [],
    measurements: [],
    imageLink: ""
  });
  const [loadingLandingCocktail, setLoadingLandingCocktail] = useState(false);
  const [loadingSearchResults, setLoadingSearchResults] = useState(false);
  const [loadingDetailedCocktail, setLoadingDetailedCocktail] = useState(false);
  const [drinksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * Fetches a cocktail for the landing page stored as a low-detail object.
   */

  async function fetchLandingCocktail() {
    setLoadingLandingCocktail(true);
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    response.json().then((data) => {
      const newCocktail: ICocktail = {
        id: data.drinks[0].idDrink,
        title: data.drinks[0].strDrink,
        tags: [],
        category: data.drinks[0].strCategory,
        glass: data.drinks[0].strGlass,
        ingredients: [],
        measurements: [],
        imageLink: data.drinks[0].strDrinkThumb
      }
      setLandingCocktail(newCocktail);
    }).catch((e) => { console.log(e); alert("No random drink found.") })

    setLoadingLandingCocktail(false);
  }

  /**
   * Fetches all cocktails matching the search term and stores then as a low-detail array.
   * @param searchTerm The inputted search term.
   */

  async function fetchCocktailSearch(searchTerm: string) {
    setLoadingSearchResults(true);
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchTerm);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    response.json().then((data) => {

      setCocktailSearchResults([]);
      const newArray: ICocktail[] = [];

      for (let i = 0; i < data.drinks.length; i++) {
        const newCocktail: ICocktail = {
          id: data.drinks[i].idDrink,
          title: data.drinks[i].strDrink,
          tags: [],
          category: data.drinks[i].strCategory,
          glass: data.drinks[i].strGlass,
          ingredients: [],
          measurements: [],
          imageLink: data.drinks[i].strDrinkThumb
        }
        newArray.push(newCocktail);
      }
      setCocktailSearchResults(newArray);
    }).catch((e) => { console.log(e); alert("No drinks found.") })

    setLoadingSearchResults(false);
    setCurrentPage(1);
  }

  /**
   * Fetches a cocktail using the provided ID and stores it as a detailed object.
   * @param searchId The ID to fetch a cocktail for.
   */

  async function fetchDetailedCocktail(searchId: string) {
    setLoadingDetailedCocktail(true);
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + searchId);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    response.json().then((data) => {
      let newCocktail: ICocktail = {
        id: data.drinks[0].idDrink,
        title: data.drinks[0].strDrink,
        tags: [],
        category: data.drinks[0].strCategory,
        glass: data.drinks[0].strGlass,
        ingredients: [],
        measurements: [],
        imageLink: data.drinks[0].strDrinkThumb
      }

      if (data.drinks[0].strTags !== null) {
        const tagString: string = data.drinks[0].strTags;
        newCocktail.tags = tagString.split(',');
      }

      // Any better way to do this?

      newCocktail.ingredients[0] = data.drinks[0].strIngredient1
      newCocktail.ingredients[1] = data.drinks[0].strIngredient2
      newCocktail.ingredients[2] = data.drinks[0].strIngredient3
      newCocktail.ingredients[3] = data.drinks[0].strIngredient4
      newCocktail.ingredients[4] = data.drinks[0].strIngredient5

      newCocktail.ingredients[5] = data.drinks[0].strIngredient6
      newCocktail.ingredients[6] = data.drinks[0].strIngredient7
      newCocktail.ingredients[7] = data.drinks[0].strIngredient8
      newCocktail.ingredients[8] = data.drinks[0].strIngredient9
      newCocktail.ingredients[9] = data.drinks[0].strIngredient10

      newCocktail.ingredients[10] = data.drinks[0].strIngredient11
      newCocktail.ingredients[11] = data.drinks[0].strIngredient12
      newCocktail.ingredients[12] = data.drinks[0].strIngredient13
      newCocktail.ingredients[13] = data.drinks[0].strIngredient14
      newCocktail.ingredients[14] = data.drinks[0].strIngredient15


      newCocktail.measurements[0] = data.drinks[0].strMeasure1
      newCocktail.measurements[1] = data.drinks[0].strMeasure2
      newCocktail.measurements[2] = data.drinks[0].strMeasure3
      newCocktail.measurements[3] = data.drinks[0].strMeasure4
      newCocktail.measurements[4] = data.drinks[0].strMeasure5

      newCocktail.measurements[5] = data.drinks[0].strMeasure6
      newCocktail.measurements[6] = data.drinks[0].strMeasure7
      newCocktail.measurements[7] = data.drinks[0].strMeasure8
      newCocktail.measurements[8] = data.drinks[0].strMeasure9
      newCocktail.measurements[9] = data.drinks[0].strMeasure10

      newCocktail.measurements[10] = data.drinks[0].strMeasure11
      newCocktail.measurements[11] = data.drinks[0].strMeasure12
      newCocktail.measurements[12] = data.drinks[0].strMeasure13
      newCocktail.measurements[13] = data.drinks[0].strMeasure14
      newCocktail.measurements[14] = data.drinks[0].strMeasure15

      // Filters out empty fields from the array, effectively removing useless list items for both ingredients and measurements, making sure they align when rendered.
      
      newCocktail.ingredients = newCocktail.ingredients.filter((ingredient) => ingredient !== null);

      setDetailedCocktail(newCocktail);
    }).catch((e) => { console.log(e); alert("No drink with that ID found.") })

    setLoadingDetailedCocktail(false);
  }

  /**
   * Changes the current page on the search page.
   * @param newPage The new page.
   */

  async function modifyCurrentPage(newPage: number){
    setCurrentPage(newPage);
  }

  const values: ICocktailContext = {
    landingCocktail,
    cocktailSearchResults,
    detailedCocktail,
    loadingLandingCocktail,
    loadingSearchResults,
    loadingDetailedCocktail,
    drinksPerPage,
    currentPage,
    fetchLandingCocktail,
    fetchCocktailSearch,
    fetchDetailedCocktail,
    modifyCurrentPage
  };

  return <CocktailContext.Provider value={values}>{children}</CocktailContext.Provider>;
}