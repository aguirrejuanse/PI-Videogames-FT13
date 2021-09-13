import { getAllGames, GET_ALL_GAMES } from "../../store/actions/gameActions";
import GamesMock from "../../__mocks__/gamesMock";

describe('Actions', () => {
  xit('getAllGames', () => {
    const payload = GamesMock;
    const expected = {
      type: GET_ALL_GAMES,
      payload,
    };
    // console.log(expected);
    expect(getAllGames(payload)).toEqual(expected);
  });

})