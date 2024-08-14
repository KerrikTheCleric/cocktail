export interface ICocktail {
    title: string,
    imageLink: string
   };

   export interface ICocktailContext {
    landingCocktail: ICocktail;
    fetchCocktail: () => void;
  }