import "./App.css";
import React, { Suspense } from "react";

import NavBar from "./components/NavBar";
import {Loading} from "./util/Loading";

const Routes = React.lazy(() => import("./Routes"));
function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <NavBar />
      <Routes />
    </Suspense>
  );
}

export default App;
