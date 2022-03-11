import React from 'react';
import Draggable from 'react-draggable';
import Box from '@mui/material/Box';
import { toggleBorder } from '../../../shared/styles/debugging-border';

export default class Notes extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    //this.setState({activeDrags: ++this.state.activeDrags});
    this.setState(prev => {
      return {
        activeDrags: prev.activeDrags + 1,
      };
    });
  };

  onStop = () => {
    //this.setState({activeDrags: --this.state.activeDrags});
    this.setState(prev => {
      return {
        activeDrags: prev.activeDrags - 1,
      };
    });
  };
  onDrop = (e) => {
    //this.setState({activeDrags: --this.state.activeDrags});
    this.setState(prev => {
      return {
        activeDrags: prev.activeDrags - 1,
      };
    });
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove('hovered');
    }
  };
  onDropAreaMouseEnter = (e) => {
    if (this.state.activeDrags) {
      e.target.classList.add('hovered');
    }
  }
  onDropAreaMouseLeave = (e) => {
    e.target.classList.remove('hovered');
  }

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const nodeRef = React.createRef(null);
    const isBorder = toggleBorder;
    return (
      <Box sx={{ width: '100%', height:'500px', border: isBorder ? '1px solid blue' : 'none'}}>
        <div style={{height: '500px', width: '100%', position: 'relative', overflow: 'auto', padding: '0', border: isBorder ? '5px solid yellow' : 'none'}}>
          <Draggable bounds="parent" {...dragHandlers} nodeRef={nodeRef}>
            <div className="box" ref={nodeRef}>
              I can only be moved within my offsetParent.<br /><br />
              Both parent padding and child margin work properly.
            </div>
          </Draggable>
        </div>
      </Box>
    );
  }
}