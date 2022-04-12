import React from 'react';
import Draggable from 'react-draggable';
import Box from '@mui/material/Box';
import { toggleBorder } from '../../../shared/styles/debugging-border';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { updateNoteCoordinates } from '../../../modules/nav/slice/noteSlice';
import { useDispatch, useSelector } from 'react-redux';
import NoteFormDialog from '../addNote/addNoteDialog';
import { api as axios } from '../../../shared/utils/interceptor';
import {apiRoute, httpMethod} from '../../../shared/constants/constants';
import {catchAsync} from '../../../shared/utils/catchAsync';

class Note extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: this.props.data.x, y: this.props.data.y
    },
    id: this.props.data._id,
    title: this.props.data.title,
    description: this.props.data.description
  };

  // drag event
  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  // drag start event
  onStart = () => {
    this.setState(prev => {
      return {
        activeDrags: prev.activeDrags + 1,
      };
    });
  };

  // drop event
  onStop = () => {
    this.setState(prev => {
      return {
        activeDrags: prev.activeDrags - 1,
      };
    });
    this.props.updatePositionAction(this.state.id, this.state.deltaPosition);
  };
  onEdit = () => {
    this.props.editNote({...this.state});
  }
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, title, description} = this.state;
    const editHandler = this.onEdit;
    const nodeRef = React.createRef(null);
    return (
      <Draggable 
      bounds="parent" 
      {...dragHandlers} 
      onDrag={this.handleDrag} 
      defaultPosition={{x: Number(deltaPosition.x), y: Number(deltaPosition.y)}} 
      nodeRef={nodeRef}
      cancel="strong"
      >
        <div ref={nodeRef} style={{width: '180px', height: 'fit-content', float: 'left', cursor: 'move'}}>
          <Card sx={{ width: '100%' }} variant='outlined'>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {title}
              </Typography>
              <Typography variant="body2">
                {description}
                {/* x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)} */}
              </Typography>
            </CardContent>
            <CardActions>
              <strong style={{marginLeft: 'auto'}}>
                <IconButton color="inherit" component="span" onClick={editHandler}>
                  <EditOutlinedIcon />
                </IconButton>
              </strong>
            </CardActions>
          </Card>
        </div>
      </Draggable>
    );
  }
}
export default function Notes(props) {
  const isBorder = toggleBorder;
  const token = useSelector((state) => state.userSlice.token);
  const dialogRef = React.useRef();
  const dispatch = useDispatch();
  let updateNote = catchAsync(async (note) => {
    await axios({
      method: httpMethod.patch,
      url: apiRoute.notes + '/' + note.id,
      headers: {Authorization: `Bearer ${token}`},
      data: {x: note.x, y: note.y}
    });
  });
  function updatePositionAction(id, position) {
    dispatch(updateNoteCoordinates({id, x: position.x, y: position.y}));
    updateNote({id, x: position.x, y: position.y});
  }
  function editNote(note) {
    console.log(note);
    dialogRef.current.handleClickOpen();
  }
  return(
    <Stack spacing={3}>
      <Card sx={{ minWidth: '500px', height: '50px', marginX:'auto', boxShadow:5 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Take a note...
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ width: '100%', height:'78vh', border: isBorder ? '1px solid blue' : 'none'}}>
        <div style={{height: '100%', width: '100%', position: 'relative', overflow: 'auto', padding: '0', border: isBorder ? '5px solid yellow' : 'none'}}>
          {
            props.data.map((node, index) => (
              <Note key={node._id} data={node} updatePositionAction={updatePositionAction} editNote={editNote}/>
            ))
          }
        </div>
      </Box>
      <NoteFormDialog ref={dialogRef}/>
    </Stack>
  )
}
