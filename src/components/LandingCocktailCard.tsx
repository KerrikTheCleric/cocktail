import { ReactElement, useEffect } from "react";
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";

import { ICocktail } from "../interfaces.ts";
import "../css/LandingCocktailCard.css";

interface ILandingCocktailCardProps {
    cocktail: ICocktail;
}

export default function LandingCocktailCard({ cocktail }: ILandingCocktailCardProps): ReactElement {

    const { fetchCocktail } = useCocktailLogic();

    useEffect(() => {
        fetchCocktail();
    }, []);

    return (
        <section className="landingCocktailCardSection">
            <h1>{cocktail.title}</h1>
            <img src={cocktail.imageLink} alt={cocktail.title} />
            <a href="https://www.w3schools.com" target="_blank">See More</a>
        </section>
    );
}