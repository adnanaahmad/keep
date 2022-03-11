import React from 'react';
import Draggable from 'react-draggable';
import Box from '@mui/material/Box';
import { toggleBorder } from '../../../shared/styles/debugging-border';

class Note extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
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
    const {deltaPosition} = this.state;
    const nodeRef = React.createRef(null);
    return (
      <Draggable 
      bounds="parent" 
      {...dragHandlers} 
      onDrag={this.handleDrag} 
      defaultPosition={{x: Number(deltaPosition.x), y: Number(deltaPosition.y)}} 
      nodeRef={nodeRef}
      >
        <div className="box" ref={nodeRef}>
          <div>I track my deltas</div>
          <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
        </div>
      </Draggable>
    );
  }
}
export default function Notes() {
  const isBorder = toggleBorder;
  return(
    <Box sx={{ width: '100%', height:'500px', border: isBorder ? '1px solid blue' : 'none'}}>
      <div style={{height: '500px', width: '100%', position: 'relative', overflow: 'auto', padding: '0', border: isBorder ? '5px solid yellow' : 'none'}}>
        <Note/>
      </div>
    </Box>
  )
}
