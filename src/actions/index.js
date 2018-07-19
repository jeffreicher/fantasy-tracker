import axios from 'axios';

export const FETCH_GAMES = 'FETCH_GAMES';

const ROOT_URL = 'https://localhost:2424/api/nba';

function gamesAction(response) {
    return {
        type: FETCH_GAMES,
        payload: response
    }
}

export function retrieveGames(day) {
    let games = `${ROOT_URL}/games/${day}`;
    return (dispatch) => {
        return axios.get(games).then(response => {
            dispatch(gamesAction(response))
        }).catch(err => {
            console.log('error', err);
            dispatch(renderError(err));
        })
    }
}