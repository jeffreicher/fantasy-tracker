import axios from 'axios';

export const FETCH_GAMES = 'FETCH_GAMES';

const ROOT_URL = 'https://localhost:2424/api/nba';

export function retrieveGames(response) {
    return {
        type: FETCH_GAMES,
        payload: response
    }
}