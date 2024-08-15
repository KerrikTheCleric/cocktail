import { createContext, ReactElement, ReactNode, useState } from "react";
//import { useQuery } from '@tanstack/react-query'
import { ICocktail, ICocktailContext } from "../interfaces";

interface ICocktailProviderProps {
  children: ReactNode;
}

export const CocktailContext = createContext<ICocktailContext>({} as ICocktailContext);

export function CocktailProvider({ children }: ICocktailProviderProps): ReactElement {
  const [landingCocktail, setLandingCocktail] = useState<ICocktail>({
    title: "Loading",
    imageLink: ""
  });
  const [cocktailSearchResults, setCocktailSearchResults] = useState<ICocktail[]>([]);
  const [loadingSearchResults, setLoadingSearchResults] = useState(false);
  const [drinksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  //const { isPending, error, landingCocktail, isFetching } = useQuery({ queryKey: ['cocktail'], queryFn: fetchCocktail })


  async function fetchLandingCocktail() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    response.json().then((data) => {
      const newCocktail: ICocktail = {
        title: data.drinks[0].strDrink,
        imageLink: data.drinks[0].strDrinkThumb
      }
      setLandingCocktail(newCocktail);
    })
  }

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
          title: data.drinks[i].strDrink,
          imageLink: data.drinks[i].strDrinkThumb
        }
        newArray.push(newCocktail);
      }

      //console.log(newArray);

      setCocktailSearchResults(newArray);
      setLoadingSearchResults(false);
      setCurrentPage(1);
    })
  }

  async function modifyCurrentPage(currentPage: number){
    setCurrentPage(currentPage);
  }

  const values: ICocktailContext = {
    landingCocktail,
    cocktailSearchResults,
    loadingSearchResults,
    drinksPerPage,
    currentPage,
    fetchLandingCocktail,
    fetchCocktailSearch,
    modifyCurrentPage
  };

  return <CocktailContext.Provider value={values}>{children}</CocktailContext.Provider>;
}