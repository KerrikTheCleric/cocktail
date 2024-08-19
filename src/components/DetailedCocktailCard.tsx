import { ReactElement } from "react";
import { ICocktail } from "../interfaces.ts";
import "../css/DetailedCocktailCard.css";

interface IDetailedCocktailCardProps {
    cocktail: ICocktail;
    isLoading: boolean;
}

export default function DetailedCocktailCard({ cocktail, isLoading }: IDetailedCocktailCardProps): ReactElement {

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const tags = cocktail.tags.map((tag) =>
        <li key={crypto.randomUUID() }>
            <p>{tag}</p>
        </li>
    );

    let zippedIngredientsAndMeasurements = cocktail.ingredients.map((ingredient, i) =>
        <li key={crypto.randomUUID() }>
            <p>{cocktail.measurements[i]} {ingredient}</p>
        </li>

    );

    if (tags.length === 0) {
        return (
            <section className="detailedCocktailCardSection">
                <div className="centeredTextDiv">
                    <h1 className="centeredText">{cocktail.title}</h1>
                </div>
                <img src={cocktail.imageLink} alt={cocktail.title} />
                <ul className="itemList">
                    <li>
                        <p>Type: {cocktail.category}</p>
                    </li>
                    <li>
                        <p>Glass: {cocktail.glass}</p>
                    </li>
                    <li>
                        <ul>
                            {zippedIngredientsAndMeasurements}
                        </ul>
                    </li>
                </ul>
            </section>
        );
    } else {
        return (
            <section className="detailedCocktailCardSection">
                <div className="centeredTextDiv">
                    <h1 className="centeredText">{cocktail.title}</h1>
                </div>
                <img src={cocktail.imageLink} alt={cocktail.title} />
                <ul className="itemList">
                    <li>
                        <p>Type: {cocktail.category}</p>
                    </li>
                    <li>
                        <ul>
                            {tags}
                        </ul>
                    </li>
                    <li>
                        <p>Glass: {cocktail.glass}</p>
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
}