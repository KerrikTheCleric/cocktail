export interface ICocktail {
    id: string,
    title: string,
    tags: string[],
    category: string,
    glass: string,
    ingredients: string[],
    measurements: string[],
    imageLink: string
   };

   export interface ICocktailContext {
    landingCocktail: ICocktail;
    cocktailSearchResults: ICocktail[];
    detailedCocktail: ICocktail;
    loadingLandingCocktail: boolean;
    loadingSearchResults: boolean;
    loadingDetailedCocktail: boolean;
    drinksPerPage: number;
    currentPage: number;
    fetchLandingCocktail: () => void;
    fetchCocktailSearch: (searchTerm: string) => void;
    fetchDetailedCocktail: (searchId: string) => void;
    modifyCurrentPage: (currentPage: number) => void;
  }