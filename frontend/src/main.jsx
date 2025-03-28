import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SquareLogin from "./SquareLogin";
import SquareSignup from "./SquareSignup";
import SearchResults from "./SearchResults";
import Prova from "./Prova";
import HomeCustomIn from "./HomeCustomIn";
import HomeCustom from "./HomeCustom ";

//import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeCustom />} />
      <Route path="/home" element={<HomeCustomIn />} />
      <Route path="/sign-up" element={<SquareSignup />} />
      <Route path="/log-in" element={<SquareLogin />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="/prova" element={<Prova />} />
    </Routes>
  </BrowserRouter>
);
