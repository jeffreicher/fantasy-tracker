const NBA = require('nba')
const curry = NBA.findPlayer('Stephen Curry')
// console.log(curry)

async function scoreboard(res, req) {
  try {
    let data = await NBA.stats.scoreboard({ gameDate: '01/08/2019' })
    // console.log(data)
    return data
  } catch (e) {
    console.log(e)
  }
}

module.exports = scoreboard
