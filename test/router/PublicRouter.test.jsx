import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRouter } from "../../src/router/PublicRouter";
import { MemoryRouter, Route, Routes } from "react-router";

describe("Pruebas en <PublicRouter/>", () => {
  test("Debe mostar el children si no esta autenticado", () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Ruta publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("Debe de navegar si esta autenticado", () => {
    const contextValue = { logged: true, user: { name: "Chancho", id: 1 } };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRouter>
                  <h1>Ruta publica</h1>
                </PublicRouter>
              }
            />
            <Route path="marvel" element={<h1>Pagina de marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Pagina de marvel")).toBeTruthy();
  });
});
