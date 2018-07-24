import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveGames } from '../actions';
import GamesContainer from '../components/gamesComponent';

class Score extends Component {
    componentDidMount() {
        let { viewedDate } = this.props;
        this.props.retrieveGames(viewedDate);
        console.log(viewedDate);
    }

    componentWillReceiveProps(nextProps) {
        let { viewedDate } = this.props;
        if (viewedDate === nextProps.viewedDate) {
            return false;
        } else {
            this.props.fetchGames(nextProps.viewedDate);
            return true;
        }
    }
    render() {
        let { games } = this.props;
        if (!games) {
            return (
                <div>
                    No games for today.
                </div>
            )
        }
        if (games.length === 0 || this.props.noGames) {
            return (
                <div>
                    NO GAMES FOR TODAY.
                </div>
            )
        }
        return (
            <div>
                <GamesContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        games: state.gamesData.games,
        viewedDate: state.setDate.viewedDate,
        noGames: state.gamesData.noGames
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: (day) => dispatch(retrieveGames(day))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);