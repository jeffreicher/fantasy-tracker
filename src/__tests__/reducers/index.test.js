import reducer from '../../reducers'

import * as actions from '../../actions'

describe('default reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ games: [] })
  })

  it('should return FETCH_GAMES state', () => {
    const fetchGamesAction = {
      type: actions.FETCH_GAMES,
      payload: 1
    }
    expect(reducer({}, fetchGamesAction)).toEqual({
      games: { games: 1, noGames: false }
    })
  })
})
