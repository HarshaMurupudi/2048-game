import React from 'react'
import { connect } from "react-redux";
import GameBoard from '../../components/game-board/game-board.component'

import './home.styles.scss'

const HomePage = () => {
  return (
    <section className="home_parent_conatiner">
      <div className="home_contanier">
        <GameBoard />
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    replay: state.replay,
  };
}

export default connect(mapStateToProps)(HomePage);