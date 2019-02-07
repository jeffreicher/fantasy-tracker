import { FETCH_GAMES } from '../actions'
export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case FETCH_GAMES:
      console.log('entered fetch')
      return {
        ...state,
        games: action.payload,
        noGames: false
      }
    default:
      return state
  }
}
