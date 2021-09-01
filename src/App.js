import "./App.css";
import React, { Suspense } from "react";

import NavBar from "./components/NavBar";
import {Spinner} from '@chakra-ui/react';

const Routes = React.lazy(() => import("./Routes"));
function App() {
  return (
    <Suspense fallback={<Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="gray.600"
      size="xl"
    />}>
      <NavBar />
      <Routes />
    </Suspense>
  );
}

export default App;
