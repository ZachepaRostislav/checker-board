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

  onCellClick = (e) => {
    this.props.initialStep(e.currentTarget.dataset);
    console.log(e.currentTarget.dataset)
  }

  render() {

    return (
      <>
        <Grid container item xs={9} sm={10} md={10} lg={10} className='board'>
          {this.props.board.map((elem, indexRow) => {
            return (<Grid item xs={12} key={indexRow} className='row'>
              {
                elem.map((item, indexCell) => {
                  return (
                    <Grid item xs={12}
                      key={indexCell}
                      className={cn("cell", {
                        'active': item.isItemStep
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
    },
    changeStep: (payload) => {
      dispatch({ type: actionCheckers.STEP_ITEM_BOARD, payload })
    },
    initialStep: (payload) => {
      dispatch({ type: actionCheckers.CHECKER_MOVE_SELECTION, payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
