import React, { Component } from 'react';
import cn from 'classnames';

// components 
import Checker from '../checker/checker';

// utils
import createBoard from '../../utils/create-board';

//@material
import { Grid } from '@mui/material';

//styles
import './board-styles.scss';


class Board extends Component {
  
  state = {
    board: [],
  }

  componentDidMount() {
    const board = createBoard()
    this.setState((state) => {
      return { ...state, board }
    })
  }

  render() {

    return (
      <>
        <Grid container item xs={12} sm={12} md={10} lg={10} className='board'>
          {this.state.board.map((elem, indexRow) => {
            return (<Grid item xs={12} key={indexRow} className='row'>
              {
                elem.map((item, indexCell) => {
                  console.log(item)
                  return (
                    <Grid item xs={12}
                      key={indexCell}
                      className={cn("cell", {
                        'active': item === 1
                      })}
                      data-row={indexRow}
                      data-cell={indexCell}
                      onClick={this.onCellClick}
                    >
                      <Checker isActive={item.isItemActive}
                        checkerIsBlack={item.checker.isBlack}
                      />
                      {/* {indexRow < 3 && item % 2 ? <Checker isBlack={true} /> : null}
                      {indexRow > 4 && item % 2 ? <Checker isBlack={false} /> : null} */}
                    </Grid>
                  )
                })
              }
            </Grid>)
          })}
        </Grid>
      </>

    )
  }
}

export default Board;







// onCellClick = (event) => {
  //   const { row, cell } = event.target.dataset;
  //   const rowNumber = +row;
  //   const cellNumber = +cell;
  //   const { board } = this.state;

  //   board.forEach((item, indexRow) => {
  //     item.forEach((elem, indexCell) => {
  //       // board[indexRow][indexCell] = +Boolean(indexCell === cell && indexRow === row);

  //       if (indexCell === cellNumber && indexRow === rowNumber) {
  //         board[indexRow][indexCell] = 1;
  //       } else {
  //         board[indexRow][indexCell] = 0;
  //       }
  //     })
  //   });


  //   this.setState({ board: [...board] });
  // }