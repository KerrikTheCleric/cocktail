import { ReactElement } from "react";
import LandingCocktailCard from "../components/LandingCocktailCard.tsx";
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";
import "../css/LandingPage.css"

export function LandingPage(): ReactElement {
  const { landingCocktail } = useCocktailLogic();
  const { loadingLandingCocktail } = useCocktailLogic();
  const { fetchLandingCocktail } = useCocktailLogic();

  return (
    <section className="landingPageMainSection">
      <LandingCocktailCard cocktail={landingCocktail} isLoading={loadingLandingCocktail} onfetchLandingCocktail={fetchLandingCocktail} />
    </section>
  );

}