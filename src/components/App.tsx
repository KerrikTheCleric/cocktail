import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { CocktailProvider } from "../context/CocktailProvider.tsx";
import { Header } from "./Header.tsx";

import "../css/App.css"

export function App(): ReactElement {
  return (
    <>
      <Header />
      <CocktailProvider>
        <Outlet />
      </CocktailProvider>
    </>);
}
