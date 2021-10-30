import React, { Component } from 'react';
import cn from 'classnames';

//const
import actionCheckers from '../../const/action_types';

// components 
import Checker from '../checker/checker';
import { connect } from 'react-redux';

//@material
import { Grid } from '@mui/material';

//styles
import './board-styles.scss';



class Board extends Component {

  componentDidMount() {
    this.props.createBoard()
  }

onCellClick =(e)=> {
  console.log('shashka', e.target)
  console.log('yacheika',e.currentTarget)
}

  render() {

    return (
      <>
        <Grid container item xs={12} sm={12} md={10} lg={10} className='board'>
          {this.props.board.map((elem, indexRow) => {
            return (<Grid item xs={12} key={indexRow} className='row'>
              {
                elem.map((item, indexCell) => {
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

const mapStateToProps = (store) => {
  const { board } = store.board
  return { board }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: () => {
      dispatch({ type: actionCheckers.CREATE_BOARD })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);







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