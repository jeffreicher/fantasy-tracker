import { FETCH_GAMES } from '../actions/index';

export default function gamesData(state = [], action){
    switch (action.type) {
      case FETCH_GAMES:
        return {
          ...state,
          games: action.payload.data.games.games,
          noGames: false
        }
      default:
        return state;
    }
  }