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
  console.log('action', day)
  // let encoded = encodeURIComponent(day)
  // console.log(encoded)
  try {
    const response = await fetch(
      `http://localhost:2424/scoreboard?date=${day}`,
      {
        method: 'GET'
        // body: JSON.stringify({
        //   day
        // })
      }
    )
    console.log(response)
    return response.json()
  } catch (e) {
    console.log(e)
  }

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
