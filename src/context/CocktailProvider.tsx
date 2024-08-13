import { createContext, ReactElement, ReactNode, useState } from "react";
import { ICocktail, ICocktailContext } from "../interfaces";

interface ICocktailProviderProps {
  children: ReactNode;
}

export const CocktailContext = createContext<ICocktailContext>({} as ICocktailContext);

export function CocktailProvider({ children }: ICocktailProviderProps): ReactElement {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);

  const values: ICocktailContext = {
    cocktails
  };

  return <CocktailContext.Provider value={values}>{children}</CocktailContext.Provider>;
}