import reducer from "../../store/reducers";
import GamesMock from "../../__mocks__/gamesMock";

describe('Reducers', () => {
  it('Retornar Initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });
})