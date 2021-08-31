import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import customTheme from "./theme.js";

ReactDOM.render(
  <Auth0Provider
    domain="dev-5torqz8e.us.auth0.com"
    clientId="128wykGVXmyeRPfFARUE7OUgLaqpTcwf"
    redirectUri={window.location.origin}
    audience="this is an identifier"
    scope="openid profile email"
  >
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
