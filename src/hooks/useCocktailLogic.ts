import { ICocktailContext } from "../interfaces";
import { useContext } from "react";
import { CocktailContext } from "../context/CocktailProvider.tsx";

export function useCocktailLogic(): ICocktailContext {
  return useContext(CocktailContext);
}