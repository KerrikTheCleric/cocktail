import { ReactElement, useEffect } from "react";
import { ICocktail } from "../interfaces.ts";
import "../css/LandingCocktailCard.css";

interface ILandingCocktailCardProps {
    cocktail: ICocktail;
    onfetchLandingCocktail: () => void;
}

export default function LandingCocktailCard({ cocktail, onfetchLandingCocktail }: ILandingCocktailCardProps): ReactElement {

    useEffect(() => {
        onfetchLandingCocktail();
    }, []);
    return (
        <section className="landingCocktailCardSection">
            <h1>{cocktail.title}</h1>
            <img src={cocktail.imageLink} alt={cocktail.title} />
            <a href="https://www.w3schools.com" target="_blank">See More</a>
        </section>
    );
}