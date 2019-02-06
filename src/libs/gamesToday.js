export async function retrieveGames() {
  console.log('entered games')
  let url = 'http://localhost:2424/scoreboard'
  try {
    let res = await fetch(url)
    console.log('game data response', res.body)
    return res
  } catch (e) {
    console.log(e)
  }
}
