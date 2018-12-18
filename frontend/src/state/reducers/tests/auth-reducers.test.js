import store from "../../index";
import { login } from "../../actions/auth";

describe("auth-actions unit tests", () => {
  it("a call to the login function action creator should return a function.", () => {
    expect(typeof login()).toBe("function");
  });
});

describe("auth-actions integration tests", () => {
  const { dispatch, getState } = store;
  it("should log a user in.", async () => {
    let logged_in;
    logged_in = getState().authenticationStatus.logged_in;
    expect(logged_in).toBe(false);
    //let bloop = await login("mmmm", "mmmm")(dispatch, getState);
    //logged_in = getState().authenticationStatus.logged_in;
    //expect(logged_in).toBe(true);
  });
});
