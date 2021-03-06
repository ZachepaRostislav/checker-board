import React, { Component } from 'react';
// components
import Board from '../board.js';
import BoardItem from '../board-item';
import HistoryStep from '../history-step';
import BoardOptions from '../board-options';
// @material
import { Grid } from '@mui/material';

// const
import { arrNum, arrLet } from '../../const/const';


export default class EverythingHere extends Component {
  render() {
    return (
      <>
        <BoardOptions />
        <Grid container item xs={12}>
          <Grid item xs={1} style={{ display: 'flex', flexDirection: 'column-reverse' }}>
            {arrNum.map(item => <Grid item xs key={item}>
              <BoardItem item={item} />
            </Grid>)}
          </Grid>
          <Grid container item xs>
            <Board />
            <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <HistoryStep counter="Первый Ход" />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={1} >
            </Grid>
            <Grid container item xs={8} sm={9} md={9} lg={9}  >
              {arrLet.map(item => <Grid item xs key={item}>
                <BoardItem item={item} />
              </Grid>)}
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}
