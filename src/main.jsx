import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import {BrowserRouter} from "react-router-dom";
import "./styles/globals.css";
import "./index.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <BrowserRouter>
      <App />
      </BrowserRouter>      
    </ThirdwebProvider>
  </React.StrictMode>
);
