import { ReactElement } from "react";
import { useCocktailLogic } from "../hooks/useCocktailLogic.ts";
import SearchFormSection from "../components/SearchFormSection"

export function SearchPage(): ReactElement {

  const { cocktailSearchResults } = useCocktailLogic();
  const { loadingSearchResults } = useCocktailLogic();
  const { drinksPerPage } = useCocktailLogic();
  const { currentPage } = useCocktailLogic();
  const { fetchCocktailSearch } = useCocktailLogic();
  const { modifyCurrentPage } = useCocktailLogic();


  return (
    <section>
      <h1>Search Page</h1>
      <SearchFormSection cocktailSearchResults={cocktailSearchResults} isLoading={loadingSearchResults} drinksPerPage={drinksPerPage} currentPage={currentPage} onFetchCocktailSearch={fetchCocktailSearch} onModifyCurrentPage={modifyCurrentPage}/>
    </section>
  );
}