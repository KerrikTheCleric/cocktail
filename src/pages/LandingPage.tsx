import { ReactElement } from "react";
//import Cocktail from "../components/Cocktail.tsx";

import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";


export function LandingPage(): ReactElement {
  const { cocktails } = useCocktailLogic();
  const { fetchCocktail } = useCocktailLogic();



  return (
    <section>
      <h1>Landing Page</h1>
      <button type="button" onClick={() => fetchCocktail()}>
        Fetch
      </button>
      {cocktails.map((c) => (
        <h2 key={crypto.randomUUID()}>{c.title}</h2>
      ))}
    </section>
  );

}