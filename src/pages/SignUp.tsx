import { Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ButtonDefault from './components/Button';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepassword, setErrorRepassword] = useState(false);
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
         const emailValid =
                (email.endsWith(".com") || email.endsWith(".com.br")) && email.includes("@");

            if (email.length > 0) {
                setErrorEmail(!emailValid);
            }

            const passwordValid = password.length >= 6;
            if (password.length > 0) {
                setErrorPassword(!passwordValid);
            }

            const repasswordValid = password === repassword;

            if (repassword.length > 0) {
                setErrorRepassword(!repasswordValid);
            }

            setDisabled(!(emailValid && passwordValid && repasswordValid));
    }, [email, password, repassword])

  return (
    <React.Fragment>
      <Grid xs={12} width="100vw" height="100vh" justifyContent="center" alignItems="center" display="flex" bgcolor="#f2f2f2">
              <Grid    height="80%" width="30%" >
              <Grid xs={false}  spacing={2} display="flex" flexDirection="column" bgcolor="#fff" width="100%" height="100%" alignItems="center" justifyContent="center" borderRadius="20px">
                    <Grid xs={12} marginBottom="50px">
                        <Typography variant='h6'>CRIE SUA CONTA</Typography>
                    </Grid>
                   <Grid xs={12} marginBottom="20px">
                     <TextField id="filled-basic" label="Email" type='email' variant="standard" value={email} onChange={(ev) => setEmail(ev.target.value)}  error = {errorEmail} helperText = {errorEmail ? "Email Invalido" : ""}/>
                   </Grid>
                    <Grid xs={12} marginBottom="20px">
                     <TextField id="filled-basic" label="Password" type='password' variant="standard" value={password} onChange={(ev) => setPassword(ev.target.value)}  error = {errorPassword} helperText = {errorPassword ? "Senha deve conter no minimo 6 caracteres" : ""} />
                   </Grid>
                   <Grid xs={12}>
                     <TextField id="filled-basic" label="Repassword" type='password' variant="standard" value={repassword} onChange={(ev) => setRepassword(ev.target.value)} error = {errorRepassword} helperText = {errorRepassword ? "Senhas não coincidem" : ""} />
                   </Grid>
                   <ButtonDefault title='Criar conta'/>
                    
                </Grid>
            </Grid>
     </Grid>
     
    </React.Fragment>
  );
};

export default SignUp;
