//import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {...openedMixin(theme), top: '64px'},
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {...closedMixin(theme), top: '64px'},
    }),
  }),
);

export default function AppSideNav(props) {
    const listItems = [
        {name: 'Notes', icon: <StickyNote2OutlinedIcon/>},
        {name: 'Label', icon: <LabelOutlinedIcon/>},
        {name: 'Edit Label', icon: <EditOutlinedIcon/>},
        {name: 'Archive', icon: <ArchiveOutlinedIcon/>},
        {name: 'Trash', icon: <DeleteOutlinedIcon/>},
    ];
    return(
        <Drawer variant="permanent" open={props.open}>
            <List>
            {listItems.map((node, index) => (
                <ListItemButton
                key={node.name}
                sx={{
                    minHeight: 48,
                    justifyContent: props.open ? 'initial' : 'center',
                    px: 2.5,
                }}
                >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                        }}
                    >
                        {node.icon}
                    </ListItemIcon>
                    <ListItemText primary={node.name} sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
            ))}
            </List>
        </Drawer>
    )
}