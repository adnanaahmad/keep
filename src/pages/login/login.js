import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import classes from './login.module.css'

function Login() {
  return (
      <React.Fragment>
        <Card sx={{ width: 400, height: 260, alignSelf: 'center' }} className={classes.login}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
                Notes
                </Typography>
                <Stack component="form" spacing={2}>
                    <TextField fullWidth label="User Name" id="fullWidth" />
                    <TextField fullWidth label="Password" id="fullWidth" />
                </Stack>
            </CardContent>
            <CardActions>
                <Button size="small">Login</Button>
                <Button size="small">Register</Button>
            </CardActions>
        </Card>
      </React.Fragment>
  );
}

export default Login;