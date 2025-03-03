import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SearchHero } from "../../src/heroes/pages/SearchHero";

describe("Pruebas en <SearchHero>", () => {
  test("Debe de mostrar correctamente con valrores por defecto ", () => {
    render(
      <MemoryRouter>
        <SearchHero />
      </MemoryRouter>
    );
    screen.debug();
  });
});
