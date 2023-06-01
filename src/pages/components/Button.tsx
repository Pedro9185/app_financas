import { Button, Grid } from '@mui/material';
import React from 'react';

interface ButtonDefaultProps {
  title: string;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({ title }) => {
  return (
    <React.Fragment>
        <Grid xs={12} marginTop={5}>
             <Button  type='submit' variant='contained'>{title}
             </Button>
         </Grid>
    </React.Fragment>
  );
};

export default ButtonDefault;
