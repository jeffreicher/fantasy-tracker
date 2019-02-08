import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveGames } from '../actions'
import GamesContainer from '../components/gamesComponent'
import moment from 'moment'

class Score extends Component {
  state = {
    games: []
  }
  componentWillMount() {
    console.log('hello')
  }

  async componentDidMount() {
    // let { viewedDate } = this.props
    let today = new Date()
    today = moment(today).format('MM-DD-YYYY')
    // let result = await retrieveGames(today)
    // console.log('result', result)
    await this.props.dispatchRetrieveGames(today)
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('entered')
  //   let { viewedDate } = this.props
  //   if (viewedDate === nextProps.viewedDate) {
  //     return false
  //   } else {
  //     console.log('entered')
  //     this.props.fetchGames(nextProps.viewedDate)
  //     return true
  //   }
  // }
  render() {
    console.log(this.state)
    console.log(this.props)
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
  return {
    games: state.games
    // viewedDate: state.setDate.viewedDate,
    // noGames: state.gamesData.noGames
  }
}

const mapDispatchToProps = dispatch => {
  // let today = new Date()
  // today = moment(today).format('MM/DD/YYYY')
  // console.log(today)
  return {
    dispatchRetrieveGames: today => dispatch(retrieveGames(today))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)
