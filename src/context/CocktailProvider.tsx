import { createContext, ReactElement, ReactNode, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { ICocktail, ICocktailContext } from "../interfaces";

interface ICocktailProviderProps {
  children: ReactNode;
}

export const CocktailContext = createContext<ICocktailContext>({} as ICocktailContext);

export function CocktailProvider({ children }: ICocktailProviderProps): ReactElement {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  //const { isPending, error, data, isFetching } = useQuery({ queryKey: ['cocktail'], queryFn: fetchCocktail })


  async function fetchCocktail() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    response.json().then((data) => {
      const newCocktail: ICocktail = {
        title: data.drinks[0].strDrink
      }
      setCocktails([...cocktails, newCocktail]);
    })
  }

  const values: ICocktailContext = {
    cocktails,
    fetchCocktail
  };

  return <CocktailContext.Provider value={values}>{children}</CocktailContext.Provider>;
}