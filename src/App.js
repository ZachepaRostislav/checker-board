import React, { Component } from 'react';

// components
import Board from './components/board.js';
import BoardItem from './components/board-item';
import FormAuthorization from './components/form-authorization/form-authorization.js';

// import Buttons from './components/buttons/buttons.js';
import HistoryStep from './components/history-step/history-step.js';

// @material
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';

// const
import { arrNum, arrLet } from './const/const.js';
import BoardOptions from './components/board-options/board-options.js';


export default class App extends Component {

  render() {

    return (

      <Box p={1.25}>
        <Container fixed>
          <Grid container maxWidth='lg'>
            <FormAuthorization/>
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
          </Grid>

        </Container>
      </Box>


    )
  }
}

