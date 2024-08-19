import { ReactElement } from "react";
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";
import SearchFormSection from "../components/SearchFormSection"
import "../css/SearchPage.css";

export function SearchPage(): ReactElement {
  const { cocktailSearchResults } = useCocktailLogic();
  const { loadingSearchResults } = useCocktailLogic();
  const { drinksPerPage } = useCocktailLogic();
  const { currentPage } = useCocktailLogic();
  const { fetchCocktailSearch } = useCocktailLogic();
  const { modifyCurrentPage } = useCocktailLogic();

  return (
    <section className="searchPageMainSection">
      <SearchFormSection cocktailSearchResults={cocktailSearchResults} isLoading={loadingSearchResults} drinksPerPage={drinksPerPage} currentPage={currentPage} onFetchCocktailSearch={fetchCocktailSearch} onModifyCurrentPage={modifyCurrentPage} />
    </section>
  );
}