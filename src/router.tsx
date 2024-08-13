import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components/App";
import { LandingPage } from "./pages/LandingPage";
import { SearchPage } from "./pages/SearchPage";
import { InfoPage } from "./pages/InfoPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App  />}>
      <Route index element={<LandingPage  />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="info" element={<InfoPage />} />
    </Route>
  )
);