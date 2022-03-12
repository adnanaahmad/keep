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

class Note extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: this.props.data.x, y: this.props.data.y
    },
    id: this.props.data.id,
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
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, title, description} = this.state;
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
                <IconButton color="inherit" component="span">
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
export default function Notes() {
  const notes = [
    {id: 1, title: 'One', description: 'move me anywhere on board', label: 'personal', x: 0, y:0 },
    {id: 2, title: 'Two', description: `Quickly capture what's on your mind and get a reminder later at the right place or time. Speak a voice memo on the go and have it automatically transcribed.`, label: 'personal', x: 50, y:0 },
    {id: 3, title: 'Three', description: 'move me anywhere on board', label: 'personal', x: 100, y:0 },
    {id: 4, title: 'Four', description: `The service also includes Google Docs, Google Sheets, Google Slides, Google Drawings, Google Forms, and Google Sites`, label: 'personal', x: 150, y:0 },
  ]
  const isBorder = toggleBorder;
  return(
    <Stack spacing={3}>
      <Card sx={{ minWidth: '500px', height: '50px', marginX:'auto', boxShadow:5 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Take a note...
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ width: '100%', height:'80vh', border: isBorder ? '1px solid blue' : 'none'}}>
        <div style={{height: '100%', width: '100%', position: 'relative', overflow: 'auto', padding: '0', border: isBorder ? '5px solid yellow' : 'none'}}>
          {
            notes.map((node, index) => (
              <Note key={node.id} data={node}/>
            ))
          }
        </div>
      </Box>
    </Stack>
  )
}
