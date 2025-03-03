import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/interfazGrafica";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router";

//podemos hacer mocks de librerias commpletas asi
const mockUseNavigate = jest.fn();
jest.mock("react-router", () => ({
  //solo  (reescribo) el useNavigate y lo demas uso el spread
  ...jest.requireActual("react-router"),
  useNavigate: () => mockUseNavigate,
  //cuando alguien mande llamar el usenavigate devuelve mi mock
}));

describe("Pruebas en el <Navbar/>", () => {
  const contextValue = {
    logged: true,
    user: { name: "Chancho", id: 1 },
    logout: jest.fn(),
    //El logout esta en el auth provider
  };

  //cuando uso jest fn limpie antes todos los mocks
  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar el nombre del usuario loggeado ", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Chancho")).toBeTruthy();
  });

  test("Debe llamar el logout y navigate cuando se hace click en el boton ", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const buttonLogout = screen.getByRole("button");
    fireEvent.click(buttonLogout);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
