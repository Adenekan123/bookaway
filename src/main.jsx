import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter } from "react-router-dom";
import { PictureProvider } from "./contexts/pictures.context";
import { SearchProvider } from "./contexts/search.context";
import { FilterProvider } from "./contexts/filter.context";
import { SearchQueriesProvider } from "./contexts/search-queries.context";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PictureProvider>
        <SearchProvider>
          <FilterProvider>
            <SearchQueriesProvider>
              <App />
            </SearchQueriesProvider>
          </FilterProvider>
        </SearchProvider>
      </PictureProvider>
    </BrowserRouter>
  </React.StrictMode>
);
