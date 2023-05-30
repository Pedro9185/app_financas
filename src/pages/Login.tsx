import { Grid,  TextField, Typography } from '@mui/material';
import React from 'react';
import ButtonDefault from './components/Button';
import { Link } from 'react-router-dom';

const Login: React.FC= () => {
  return (
     <Grid xs={12} width="100vw" height="100vh" justifyContent="center" alignItems="center" display="flex" bgcolor="#f2f2f2">
              <Grid    height="80%" width="30%" >
              <Grid xs={false}  spacing={2} display="flex" flexDirection="column" bgcolor="#fff" width="100%" height="100%" alignItems="center" justifyContent="center" borderRadius="20px">
                    <Grid xs={12} marginBottom="50px">
                        <Typography variant='h6'>Acessar App Finanças</Typography>
                    </Grid>
                   <Grid xs={12} marginBottom="20px">
                     <TextField id="filled-basic" label="Email" type='email' variant="standard" />
                   </Grid>
                    <Grid xs={12} >
                     <TextField id="filled-basic" label="Password" type='password' variant="standard" />
                   </Grid>
                   <ButtonDefault title='Entrar'/>
                   <Grid xs={12} marginTop='20px'><Link to="/signup">Ainda não tem conta? cadastre-se</Link></Grid>
                    
                </Grid>
            </Grid>
     </Grid>
       

  );
};

export default Login;
