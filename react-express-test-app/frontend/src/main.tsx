// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Alpha from "./pages/Alpha.tsx";
import Beta from "./pages/Beta.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="alpha" element={<Alpha />} />
        <Route path="beta" element={<Beta />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
