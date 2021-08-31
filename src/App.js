import "./App.css";
import React, { Suspense } from "react";

import NavBar from "./components/NavBar";

const Routes = React.lazy(() => import("./Routes"));
function App() {
  return (
    <Suspense fallback={<h1 className="mx-10 my-5">Loading</h1>}>
      <NavBar />
      <Routes />
    </Suspense>
  );
}

export default App;
