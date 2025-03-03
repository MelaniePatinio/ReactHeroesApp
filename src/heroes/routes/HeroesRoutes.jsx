import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../../interfazGrafica";
import { MarvelPage, DCPage, SearchHero, HeroInfo } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />

          <Route path="search" element={<SearchHero />} />
          <Route path="hero/:id" element={<HeroInfo />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
