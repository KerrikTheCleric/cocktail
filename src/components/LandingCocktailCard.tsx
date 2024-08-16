import { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";

import { ICocktail } from "../interfaces.ts";
import "../css/LandingCocktailCard.css";

interface ILandingCocktailCardProps {
    cocktail: ICocktail;
    isLoading: boolean;
    onfetchLandingCocktail: () => void;
}

export default function LandingCocktailCard({ cocktail, isLoading, onfetchLandingCocktail }: ILandingCocktailCardProps): ReactElement {

    useEffect(() => {
        onfetchLandingCocktail();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <section className="landingCocktailCardSection">
            <h1>{cocktail.title}</h1>
            <img src={cocktail.imageLink} alt={cocktail.title} />
            <Link to="/info" state={{ id: cocktail.id }}>
                <h3>See More</h3>
            </Link>
        </section>
    );
}