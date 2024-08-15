import { ReactElement } from "react";
import LandingCocktailCard from "../components/LandingCocktailCard.tsx";
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";

export function LandingPage(): ReactElement {
  const { landingCocktail } = useCocktailLogic();
  const { fetchLandingCocktail } = useCocktailLogic();

  return (
    <section>
      <h1>Landing Page</h1>
      <button type="button" onClick={() => fetchLandingCocktail()}>
        Random Cocktail
      </button>
        <LandingCocktailCard cocktail={landingCocktail} onfetchLandingCocktail={fetchLandingCocktail}/>      
    </section>
  );

}