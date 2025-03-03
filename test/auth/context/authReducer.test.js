import { render, renderHook } from "@testing-library/react";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  test("Debe retornar un estado por defecto ", () => {
    const estado1 = authReducer({ logged: false }, {});
    expect(estado1).toEqual({ logged: false });
  });

  test("Debe de (login) llamar el login autenticar y establecer el user", () => {
    const user = { id: 1, name: "Chancho" };
    const action = {
      type: types.login,
      payload: user,
    };
    const state = authReducer({ logged: false }, action);
    expect(state.user.id).toEqual(1);
    expect(state.user.name).toEqual("Chancho");
    expect(state.logged).toEqual(true);

    //expect(state).toEqual({logged:tue,user:action.payload})
  });

  test("Debe de (logout) borrar el name del usuaruio y logged en false", () => {
    const state = { logged: true, user: { id: 1, name: "Chancho" } };
    const action = {
      type: types.logout,
    };

    const state2 = authReducer({ state }, action);
    expect(state2.logged).toEqual(false);
    expect(state2.user).toBeFalsy();
  });
});
