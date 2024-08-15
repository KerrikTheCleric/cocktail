import { ReactElement, useState, FormEventHandler } from "react";
import { ICocktail } from "../interfaces.ts";
import SearchResultsList from "./SearchResultsList.tsx";
import "../css/SearchFormSection.css";

interface ISearchFormSectionProps {
    cocktailSearchResults: ICocktail[];
    isLoading: boolean;
    drinksPerPage: number;
    currentPage: number;
    onFetchCocktailSearch: (searchTerm: string) => void;
    onModifyCurrentPage: (currentPage: number) => void;
}  

export default function SearchFormSection({cocktailSearchResults, isLoading, drinksPerPage, currentPage, onFetchCocktailSearch, onModifyCurrentPage}: ISearchFormSectionProps): ReactElement {

    const [nameInputValue, setName] = useState<string>("");

    const handleOnsubmit: FormEventHandler<HTMLFormElement> = (e) => {
      onFetchCocktailSearch(nameInputValue);

      e.preventDefault();
  
    };

    return (
        <section className="searchFormSection">
            <form onSubmit={handleOnsubmit}>
                <label>
                    Cocktail:
                    <input type="text" name="cocktail" onChange={(e) => setName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <SearchResultsList cocktailSearchResults={cocktailSearchResults} isLoading={isLoading} drinksPerPage={drinksPerPage} currentPage={currentPage} onModifyCurrentPage={onModifyCurrentPage}/>
        </section>
    );
}