import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useSearchParams } from "react-router-dom";
import { api as axios } from '../../../shared/utils/interceptor';
import {apiRoute, httpMethod} from '../../../shared/constants/constants';

function AccountStatus() {
    const isBorder = toggleBorder;
    const useEffect = React.useEffect;
    const [searchParams] = useSearchParams();
    const [token] = React.useState(searchParams.get("token"));
    const navigate = useNavigate();
    const [accountStatus, setAccountStatus] = React.useState(null);

    useEffect(() => {
        let verifyUser = async (token) => {
            try {
                await axios({
                    method: httpMethod.patch,
                    url: apiRoute.verify,
                    headers: {Authorization: `Bearer ${token}`}
                });
                // account status active screen
                setAccountStatus(() => 'active');
            } catch (error) {
                // something went wrong screen
                setAccountStatus(() => 'error');
            }
        };
        if(token) {verifyUser(token)};
    }, [token]);

    function login(path) {
        navigate(path);
    }

    return (
        <React.Fragment>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{border: isBorder ? '2px solid red' : 'none', height: 'inherit', paddingX:'.5rem', width: 'inherit'}}>
                <Card variant="outlined" sx={{ width:'100%', maxWidth: 400, height: 'fit-content'}}>
                    <CardContent sx={{border: isBorder ? '1px solid blue' : 'none', mb:1}}>
                        <Stack alignItems={'center'} sx={{ border: isBorder ? '1px solid orange' : 'none' }} spacing={'1.2rem'}>
                            <AutoStoriesIcon sx={{marginX: 'auto', display:'flex', fontSize: '3rem'}} color="primary"/>
                            {
                                !token &&
                                <Stack>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                        Verify
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom component="div" textAlign={'center'}>
                                        to sign in to your account. Check your inbox for verfication email.
                                    </Typography>
                                </Stack>
                            }
                            {
                                token && accountStatus && accountStatus === 'active' &&
                                <Stack>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                        Congrats
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom component="div" textAlign={'center'}>
                                        your account is now active. You can now sign in to proceed.
                                    </Typography>
                                </Stack>
                            }
                                                        {
                                token && accountStatus && accountStatus === 'error' &&
                                <Stack>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                        Something went wrong
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom component="div" textAlign={'center'}>
                                        Please try again.
                                    </Typography>
                                </Stack>
                            }
                        </Stack>
                    </CardContent>
                    {
                        token && accountStatus && accountStatus === 'active' &&
                        <CardActions sx={{border: isBorder ? '1px solid pink' : 'none', padding:'16px', display:'flex', justifyContent: 'space-between'}}>
                            <Button variant='contained' size="small" sx={{textTransform: 'none'}} onClick={() => login('/login') }>Login</Button>
                        </CardActions>
                    }
                </Card>
            </Stack>
        </React.Fragment>
    );
}

export default AccountStatus;
