import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { LayoutContainer, Spinner } from "./components";

import "./global.css";

const App = React.lazy(() => import("./App")); // 지연 로딩

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LayoutContainer>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </LayoutContainer>
  </React.StrictMode>
);
