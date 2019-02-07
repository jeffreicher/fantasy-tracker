import axios from 'axios'

export const FETCH_GAMES = 'FETCH_GAMES'

const ROOT_URL = 'https://localhost:2424/api/scoreboard'

function gamesAction(response) {
  return {
    type: FETCH_GAMES,
    payload: response
  }
}

export async function retrieveGames(day) {
  try {
    const response = await fetch(`http://localhost:2424/scoreboard?date=${day}`)
    // console.log(await response.json())
    return {
      type: FETCH_GAMES,
      payload: await response.json()
    }
  } catch (e) {
    console.log(e)
  }
}
