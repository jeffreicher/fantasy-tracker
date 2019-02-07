import axios from 'axios'

export const FETCH_GAMES = 'FETCH_GAMES'

const ROOT_URL = 'http://localhost:2424'

export async function retrieveGames(day) {
  try {
    const response = await fetch(`${ROOT_URL}/scoreboard?date=${day}`)
    // console.log(await response.json())
    return {
      type: FETCH_GAMES,
      payload: await response.json()
    }
  } catch (e) {
    console.log(e)
  }
}
