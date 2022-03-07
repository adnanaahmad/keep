import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import classes from './login.module.css';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {toggleBorder} from '../../shared/styles/debugging-border';

function Login() {
    const isBorder = toggleBorder;
    return (
        <React.Fragment>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{border: isBorder ? '2px solid red' : 'none', height: '100vh', paddingX:'.5rem'}}>
                <Card sx={{ width:'100%', maxWidth: 400, height: 'fit-content', boxShadow: 3 }} className={classes.login}>
                    <CardContent sx={{border: isBorder ? '1px solid blue' : 'none', mb:3}}>
                        <Stack alignItems={'center'} sx={{ mb: 4, border: isBorder ? '1px solid orange' : 'none' }} spacing={'1.2rem'}>
                            <AutoStoriesIcon sx={{marginX: 'auto', display:'flex', fontSize: '3rem'}} color="primary"/>
                            <Stack>
                                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                    Sign in
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom component="div" textAlign={'center'}>
                                    to continue to notes
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack component="form" spacing={2}>
                            <TextField fullWidth label="Email" id="fullWidth" />
                            <TextField fullWidth label="Password" id="fullWidth" />
                        </Stack>
                    </CardContent>
                    <CardActions sx={{border: isBorder ? '1px solid pink' : 'none', paddingBottom:'1rem'}}>
                        <Button variant='contained' size="small">Next</Button>
                        <Button size="small">Register</Button>
                    </CardActions>
                </Card>
            </Stack>
        </React.Fragment>
    );
}

export default Login;