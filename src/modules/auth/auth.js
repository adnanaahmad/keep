import * as React from 'react';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';

export default function AuthenticationModule(props) {
    const useEffect = React.useEffect;
    useEffect(() => {
        // preload modules
        console.log('auth module');
        props.data['Login'].preload();
        props.data['Signup'].preload();
    }, [props.data]);
    return (
        <Box sx={{ display: 'flex', width: '100%', height: '95vh' }}>
            <Outlet/>
        </Box>
    );
}
