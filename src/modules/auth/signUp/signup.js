import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
//import classes from './login.module.css';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { api as axios } from '../../../shared/utils/interceptor';
import {apiRoute, httpMethod} from '../../../shared/constants/constants';
import {catchAsync} from '../../../shared/utils/catchAsync';

function Signup() {
    const isBorder = toggleBorder;
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (form) => signupUser(form),
    });
    let routeTo = (path) => navigate(path);
    let signupUser = catchAsync(async (form) => {
        await axios({
            method: httpMethod.post,
            url: apiRoute.signup,
            data: form
        });
        routeTo('/account-status');
    });
    return (
        <React.Fragment>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{border: isBorder ? '2px solid red' : 'none', height: 'inherit', paddingX:'.5rem', width: 'inherit'}}>
                <Card variant="outlined" sx={{ width:'100%', maxWidth: 400, height: 'fit-content'}}>
                    <CardContent sx={{border: isBorder ? '1px solid blue' : 'none', mb:1}}>
                        <Stack alignItems={'center'} sx={{ mb: 4, border: isBorder ? '1px solid orange' : 'none' }} spacing={'1.2rem'}>
                            <AutoStoriesIcon sx={{marginX: 'auto', display:'flex', fontSize: '3rem'}} color="primary"/>
                            <Stack>
                                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                    Sign up
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom component="div" textAlign={'center'}>
                                    to register your account
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack component="form" spacing={2}>
                            <TextField
                            id="name"
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            type="text"
                            fullWidth
                            />
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
                           <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            type="password"
                            fullWidth                            
                            />
                        </Stack>
                    </CardContent>
                    <CardActions sx={{border: isBorder ? '1px solid pink' : 'none', padding:'16px', display:'flex', justifyContent: 'space-between'}}>
                        <Button variant='contained' size="small" onClick={formik.handleSubmit} disableElevation>Next</Button>
                        <Button size="small" sx={{textTransform: 'none'}} onClick={() => routeTo('/login') }>Login instead</Button>
                    </CardActions>
                </Card>
            </Stack>
        </React.Fragment>
    );
}

export default Signup;