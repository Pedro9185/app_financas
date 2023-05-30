import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import ButtonDefault from './components/Button';



const SignUp: React.FC = () => {
  return (
    <React.Fragment>
      <Grid xs={12} width="100vw" height="100vh" justifyContent="center" alignItems="center" display="flex" bgcolor="#f2f2f2">
              <Grid    height="80%" width="30%" >
              <Grid xs={false}  spacing={2} display="flex" flexDirection="column" bgcolor="#fff" width="100%" height="100%" alignItems="center" justifyContent="center" borderRadius="20px">
                    <Grid xs={12} marginBottom="50px">
                        <Typography variant='h6'>CRIE SUA CONTA</Typography>
                    </Grid>
                   <Grid xs={12} marginBottom="20px">
                     <TextField id="filled-basic" label="Email" type='email' variant="standard" />
                   </Grid>
                    <Grid xs={12} marginBottom="20px">
                     <TextField id="filled-basic" label="Password" type='password' variant="standard" />
                   </Grid>
                   <Grid xs={12}>
                     <TextField id="filled-basic" label="Repassword" type='password' variant="standard" />
                   </Grid>
                   <ButtonDefault title='Criar conta'/>
                    
                </Grid>
            </Grid>
     </Grid>
     
    </React.Fragment>
  );
};

export default SignUp;
