import { FETCH_GAMES } from '../actions'
export default function(state = [], action) {
  // console.log(action.type)
  switch (action.type) {
    case FETCH_GAMES:
      console.log('entered fetch')
      console.log(action.payload)
      return {
        ...state,
        games: action.payload,
        noGames: false
      }
    default:
      return state
  }
}
