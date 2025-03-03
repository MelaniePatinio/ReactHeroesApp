import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";
import { MemoryRouter } from "react-router";

describe("Pruebas en <AppRouter/>", () => {
  test("Debe de entrar al login si no esta autenticado ", () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });
  screen.debug();
});
