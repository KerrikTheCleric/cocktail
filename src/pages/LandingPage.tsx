import { ReactElement } from "react";
import LandingCocktailCard from "../components/LandingCocktailCard.tsx";
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";
import "../css/LandingPage.css"

export function LandingPage(): ReactElement {
  const { landingCocktail } = useCocktailLogic();
  const {loadingLandingCocktail} = useCocktailLogic();
  const { fetchLandingCocktail } = useCocktailLogic();

  return (
    <section className="landingPageMainSection">
      <h1>Landing Page</h1>
      <button type="button" onClick={() => fetchLandingCocktail()}>
        Random Cocktail
      </button>
        <LandingCocktailCard cocktail={landingCocktail} isLoading={loadingLandingCocktail} onfetchLandingCocktail={fetchLandingCocktail}/>      
    </section>
  );

}