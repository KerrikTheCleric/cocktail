import { ReactElement, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";
import DetailedCocktailCard from "../components/DetailedCocktailCard.tsx";
import "../css/InfoPage.css";

export function InfoPage(): ReactElement {
  const location = useLocation()
  const { id } = location.state
  const { loadingDetailedCocktail } = useCocktailLogic();
  const { detailedCocktail } = useCocktailLogic();
  const { fetchDetailedCocktail } = useCocktailLogic();

  if (id !== null) {
    useEffect(() => {
      fetchDetailedCocktail(id);
    }, []);

    if (loadingDetailedCocktail) {
      return <h1 className="infoPageMainSection">Loading...</h1>;
    }

    return (
      <section className="infoPageMainSection">
        <DetailedCocktailCard cocktail={detailedCocktail} isLoading={loadingDetailedCocktail} />
      </section>
    );
  } else {
    return (
      <section>
        <h1 className="infoPageMainSection">Cocktail Info Page</h1>
      </section>
    );
  }
}