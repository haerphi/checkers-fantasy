import React, { Component } from 'react';
// import GameLogic from './game_logic';

export default class Mainboard extends Component {

  constructor(){
    super();

    this.state = {
      board: {},
    }
    console.log(this.state)
    const colNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for(let row = 0; row < 8; row++){
      for(let col = 0; col < 8; col++){
        let id = colNames[col] + (row+1);
        this.state.board[id] = {
          color: (row+col)%2 ? 'light' : 'dark',
          id: colNames[col] + (row+1),
          content: ''
        };
      }
    }
  }

  componentDidMount(){
    const reds = ['A1', 'A3', 'B2', 'C1', 'C3', 'D2', 'E1', 'E3', 'F2', 'G1', 'G3', 'H2'];
    const blues = ['A7', 'B6', 'B8', 'C7', 'D6', 'D8', 'E7', 'F6', 'F8', 'G7', 'H6', 'H8']
    reds.forEach(pos => this.addPiece(pos, 'red'));
    blues.forEach(pos => this.addPiece(pos, 'blue'));
  }

  addPiece(id, color){
    let newBoard = this.state.board;
    newBoard[id].content = (<div className={color + " checker"}></div>)
    this.setState({board: newBoard});
  }

  handleClick(e){
    e.preventDefault();
     console.log(e.currentTarget.id);
  }

  movePiece(id){
    let choice = id.currentTarget.id
    console.log(choice);
  }

  render() {
    return (
      <div className="main-view">
        <div id="checker-board">
          {Object.keys(this.state.board).map(key => {
            let square = this.state.board[key];
            return (
            <div className={'square ' + square.color} id={square.id} key={square.id} onClick={this.handleClick}>
              {square.content}
            </div>
          )})}
        </div>
      </div>
    );
  }
}
