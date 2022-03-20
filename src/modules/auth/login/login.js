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
import {toggleBorder} from '../../../shared/styles/debugging-border';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { api as axios } from '../../../shared/utils/interceptor';
import {apiRoute} from '../../../shared/constants/constants';

function Login() {
    const isBorder = toggleBorder;
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: (form) => {
          console.log(form);
          loginUser(form);
          //routeTo('/notes');
        },
    });

    function routeTo(path) {
        navigate(path);
    }
    async function loginUser(form) {
        try {
            const loginData = await axios({
                method: 'post',
                url: apiRoute.login,
                data: form
            });
            console.log(loginData.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }
    return (
        <React.Fragment>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{border: isBorder ? '2px solid red' : 'none', height: 'inherit', paddingX:'.5rem', width: 'inherit'}}>
                <Card variant="outlined" sx={{ width:'100%', maxWidth: 400, height: 'fit-content'}} className={classes.login}>
                    <CardContent sx={{border: isBorder ? '1px solid blue' : 'none', mb:1}}>
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
                            <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            type="email"
                            fullWidth
                            />
                            <TextField
                            id="password"
                            name="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            type="password"
                            fullWidth
                            />
                        </Stack>
                    </CardContent>
                    <CardActions sx={{border: isBorder ? '1px solid pink' : 'none', padding:'16px', display:'flex', justifyContent: 'space-between'}}>
                        <Button variant='contained' size="small" disableElevation onClick={formik.handleSubmit}>Next</Button>
                        <Button size="small" sx={{textTransform:'none'}} onClick={() => routeTo('/register') }>Create account</Button>
                    </CardActions>
                </Card>
            </Stack>
        </React.Fragment>
    );
}

export default Login;