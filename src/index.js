import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./theme.js";

ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
    domain= {process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    redirectUri={window.location.origin}
    audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    scope="openid profile email"
  >
    <ChakraProvider theme={customTheme}>
    {console.log(process.env.REACT_APP_AUTH0_DOMAIN)}
      <App />
     
    </ChakraProvider>
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
