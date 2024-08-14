import { ReactElement } from "react";
import LandingCocktailCard from "../components/LandingCocktailCard.tsx";
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";


export function LandingPage(): ReactElement {
  const { landingCocktail } = useCocktailLogic();
  const { fetchCocktail } = useCocktailLogic();



  return (
    <section>
      <h1>Landing Page</h1>
      <button type="button" onClick={() => fetchCocktail()}>
        Random Cocktail
      </button>
      
        <LandingCocktailCard cocktail={landingCocktail}/>
         {/* <h2 key={crypto.randomUUID()}>{c.title}</h2> */}
      
    </section>
  );

}