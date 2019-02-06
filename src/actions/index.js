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
  // let games = `${ROOT_URL}/games/${day}`
  console.log('entered')

  const response = await fetch('http://localhost:2424/scoreboard')
  const body = await response.json()

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body

  // await axios
  //   .get('http://localhost:2424/scoreboard')
  //   .then(res => {
  //     console.log('get response')
  //     console.log(res)
  //     return res
  //   })
  //   .catch(err => {
  //     console.log('err', err)
  //   })

  //   console.log(res)
  //   return dispatch => {
  //     return axios
  //       .get('http://localhost:2424/scoreboard')
  //       .then(response => {
  //         dispatch(gamesAction(response))
  //       })
  //       .catch(err => {
  //         console.log('error', err)
  //         // dispatch(renderError(err));
  //       })
  //   }
}
