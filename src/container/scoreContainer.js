import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveGames } from '../actions'
import GamesContainer from '../components/gamesComponent'

class Score extends Component {
  state = {
    games: []
  }
  componentWillMount() {
    console.log('hello')
  }

  async componentDidMount() {
    // let { viewedDate } = this.props
    let result = await retrieveGames()
    console.log(result)
  }

  componentWillReceiveProps(nextProps) {
    console.log('entered')
    let { viewedDate } = this.props
    if (viewedDate === nextProps.viewedDate) {
      return false
    } else {
      console.log('entered')
      this.props.fetchGames(nextProps.viewedDate)
      return true
    }
  }
  render() {
    let { games } = this.props
    if (!games) {
      return <div>No games for today.</div>
    }
    if (games.length === 0 || this.props.noGames) {
      return <div>NO GAMES FOR TODAY.</div>
    }
    return (
      <div>
        <GamesContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    games: state.games
    // viewedDate: state.setDate.viewedDate,
    // noGames: state.gamesData.noGames
  }
}

const mapDispatchToProps = dispatch => {
  let today = new Date()
  let day = today.getDate()
  let month = today.getMonth() + 1
  let year = today.getFullYear()
  today = `${month} / ${day} / ${year}`
  console.log(today)
  return {
    fetchGames: today => dispatch(retrieveGames(today))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)
