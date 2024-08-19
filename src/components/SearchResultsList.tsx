import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ICocktail } from "../interfaces.ts";
import "../css/SearchResultsList.css";

interface ISearchResultsListProps {
    cocktailSearchResults: ICocktail[];
    isLoading: boolean;
    drinksPerPage: number;
    currentPage: number;
    onModifyCurrentPage: (currentPage: number) => void;
}

export default function SearchResultsList({ cocktailSearchResults, isLoading, drinksPerPage, currentPage, onModifyCurrentPage }: ISearchResultsListProps): ReactElement {

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const paginationNumbers = [];
    for (let i = 1; i <= Math.ceil(cocktailSearchResults.length / drinksPerPage); i++) {
        paginationNumbers.push(i);
    }

    let startingIndex = 0;
    if (currentPage > 1) {
        startingIndex = (drinksPerPage * (currentPage - 1))
    }

    // Check in case there are less than drinksPerPage left starting from startingIndex.

    let currentCocktailResultsList = [];
    if (currentPage === paginationNumbers[paginationNumbers.length - 1]) {
        currentCocktailResultsList = cocktailSearchResults.slice(startingIndex, (startingIndex + cocktailSearchResults.length % drinksPerPage))
    } else {
        currentCocktailResultsList = cocktailSearchResults.slice(startingIndex, (startingIndex + drinksPerPage))
    }

    const listItems = currentCocktailResultsList.map((cocktail) =>
        <li key={crypto.randomUUID()}>
            <Link color="green" to="/info" state={{ id: cocktail.id }}>
                <h3>{cocktail.title}</h3>
            </Link>
        </li>
    );

    return (
        <section>
            <div>
                {paginationNumbers.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => onModifyCurrentPage(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
            </div>
            <ul className="resultsList">
                {listItems}
            </ul>
        </section>
    );
}