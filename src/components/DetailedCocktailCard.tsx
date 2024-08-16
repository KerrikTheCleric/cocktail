import { ReactElement, useEffect } from "react";

import { ICocktail } from "../interfaces.ts";
import "../css/DetailedCocktailCard.css";

interface IDetailedCocktailCardProps {
    cocktail: ICocktail;
    isLoading: boolean;
   //onfetchDetailedCocktail: () => void;
}

export default function DetailedCocktailCard({ cocktail, isLoading }: IDetailedCocktailCardProps): ReactElement {

    /* useEffect(() => {
        onfetchDetailedCocktail();
    }, []); */

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const tags = cocktail.tags.map((tag) =>
        <li key={crypto.randomUUID() }>
            <p>{tag}</p>
        </li>
    );

    const ingredients = cocktail.ingredients.map((ingredient) =>
        <li key={crypto.randomUUID() }>
            <p>{ingredient}</p>
        </li>
    );

    const measurements = cocktail.measurements.map((measurment) =>
        <li key={crypto.randomUUID() }>
            <p>{measurment}</p>
        </li>
    );

    let zippedIngredientsAndMeasurements = cocktail.ingredients.map((ingredient, i) =>
        <li key={crypto.randomUUID() }>
            <p>{cocktail.measurements[i]} {ingredient}</p>
        </li>

    );


    return (
        <section className="detailedCocktailCardSection">
            <h1>{cocktail.title}</h1>
            <img src={cocktail.imageLink} alt={cocktail.title} />
            <ul>
                <li>
                    <p>{cocktail.category}</p>
                </li>
                <li>
                    <ul>
                        {tags}
                    </ul>
                </li>
                <li>
                    <p>{cocktail.glass}</p>
                </li>
                <li>
                    <ul>
                        {zippedIngredientsAndMeasurements}
                    </ul>
                </li>
            </ul>
        </section>
    );
}