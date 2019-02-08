import { FETCH_GAMES } from '../actions'
export default function(state = [], action) {
  // console.log(action.type)
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload,
        noGames: false
      }
    default:
      return state
  }
}
