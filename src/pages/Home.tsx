import React from 'react';
import BasicModal from './components/BasicModal';
import { Grid } from '@mui/material';
import ButtonAppBar from './components/AppBar';



const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Grid xs={12}>
        <ButtonAppBar/>
      </Grid>
    <Grid xs={12} width="100vw" height="90vh" 
    display="flex"
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-end">
      <BasicModal/>
    </Grid>
    </React.Fragment>
  );
};

export default Home;
