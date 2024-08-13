import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { CocktailProvider } from "../context/CocktailProvider.tsx";
import { Header } from "./Header.tsx";

export function App(): ReactElement {
  return (
    <>
      <Header />
      <CocktailProvider>
        <Outlet />
      </CocktailProvider>
    </>);
}
