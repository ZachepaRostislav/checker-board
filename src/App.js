import React, { Component } from 'react';

// components 
import FormAuthorization from './components/form-authorization/form-authorization.js';
import EverythingHere from './components/everything-here/everything-here.js';

// @material
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Route, Routes, Link } from 'react-router-dom';
export default class App extends Component {

  render() {

    return (

      <Box p={1.25}>
        <Container fixed>
          <Grid container maxWidth='lg'>
            <>
              <Link to='/'></Link>
              <Link to='/board'></Link>
            </>
            <>
              <Routes>
                <Route path='/' element={<FormAuthorization />}>
                </Route>
                <Route path='/board' element={<EverythingHere />}>
                </Route>
              </Routes>
            </>
          </Grid>
        </Container>
      </Box>


    )
  }
}

