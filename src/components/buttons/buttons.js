import React, { Component } from 'react';

// @material
import { Grid, Button } from '@mui/material';

// styles
import './buttons-styles.scss';


export default class Buttons extends Component {
  render() {
    return (
      <>
        <Grid container item className="container">

          <Grid item xs={4} className="container_btn">
            <Button variant="contained" size="large">
              start
            </Button>
          </Grid>

          <Grid item xs={4} className="container_btn">
            <Button variant="contained" size="large">
              back
            </Button>
          </Grid>

          <Grid item xs={4} className="container_btn">
            <Button variant="contained" size="large">
              save
            </Button>
          </Grid>

        </Grid>
      </>
    )
  }
}
