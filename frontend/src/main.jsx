import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SquareLogin from "./pages/SquareLogin";
import SquareSignup from "./pages/SquareSignup";
import SearchResults from "./pages/SearchResults";
import HomeCustomIn from "./pages/HomeCustomIn";
import HomeCustom from "./pages/HomeCustom ";
import ProfileCustom from "./pages/ProfileCustom";
//import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeCustom />} />
      <Route path="/home" element={<HomeCustomIn />} />
      <Route path="/sign-up" element={<SquareSignup />} />
      <Route path="/log-in" element={<SquareLogin />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="/profile" element={<ProfileCustom />} />
    </Routes>
  </BrowserRouter>
);
