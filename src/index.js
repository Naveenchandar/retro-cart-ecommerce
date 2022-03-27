import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthContextProvider, ProductsProvider, ProductFilterProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductsProvider>
          <ProductFilterProvider>
            <App />
          </ProductFilterProvider>
        </ProductsProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
