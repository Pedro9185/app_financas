import { Button, Grid,  TextField, Typography } from '@mui/material';
import React from 'react';

const Login: React.FC= () => {
  return (
     <Grid xs={12} width="100vw" height="100vh" justifyContent="center" alignItems="center" display="flex" bgcolor="#f2f2f2">
              <Grid    height="80%" width="30%" >
              <Grid xs={false}  spacing={2} display="flex" flexDirection="column" bgcolor="#fff" width="100%" height="100%" alignItems="center" justifyContent="center" borderRadius="20px">
                    <Grid xs={12} marginBottom="50px">
                        <Typography variant='h4'>Acessar App</Typography>
                    </Grid>
                   <Grid xs={12} marginBottom="20px">
                     <TextField id="filled-basic" label="Email" variant="standard" />
                   </Grid>
                    <Grid xs={12}>
                     <TextField id="filled-basic" label="Password" variant="standard" />
                   </Grid>
                   <Grid xs={12} marginTop={10}>
                     <Button  type='submit' variant='contained'>Logar</Button>
                   </Grid>
                    
                </Grid>
            </Grid>
     </Grid>
       

  );
};

export default Login;
