export interface ICocktail {
    title: string,
    imageLink: string
   };

   export interface ICocktailContext {
    landingCocktail: ICocktail;
    cocktailSearchResults: ICocktail[];
    loadingSearchResults: boolean;
    drinksPerPage: number;
    currentPage: number;
    fetchLandingCocktail: () => void;
    fetchCocktailSearch: (searchTerm: string) => void;
    modifyCurrentPage: (currentPage: number) => void;
  }