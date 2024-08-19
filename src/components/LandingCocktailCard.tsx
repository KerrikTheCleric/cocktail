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
            <div className="centeredTextDiv">
                <h1 className="centeredText">{cocktail.title}</h1>
            </div>

            <img src={cocktail.imageLink} alt={cocktail.title} />
            <button className="bottomMiddleButtonOne" onClick={() => onfetchLandingCocktail()}>
                <span className="material-symbols-outlined" > restart_alt</span>
            </button>
            <div className="centeredTextDiv">
                <Link to="/info" state={{ id: cocktail.id }}>
                    <h3 className="centeredText">See More</h3>
                </Link>
            </div>
        </section>
    );
}