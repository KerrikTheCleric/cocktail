import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export function Header(): ReactElement {
  return (
    <header className="header">
      <h1 className="logo">Cocktail DB</h1>
      <div className="links">
        <Link className="link" to="/">Welcome</Link>
        <Link className="link" to="/search">Search</Link>
      </div>
    </header>
  );
}