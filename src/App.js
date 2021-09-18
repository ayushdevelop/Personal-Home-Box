import React from "react";
import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="*/" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};
export default App;
