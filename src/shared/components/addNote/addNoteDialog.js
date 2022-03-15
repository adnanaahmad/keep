import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const NoteFormDialog = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  React.useImperativeHandle(ref, () => ({
    handleClickOpen() {
        setOpen(true);
    }
  }))

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Note</DialogTitle>
        <DialogContent>
          <Stack sx={{width: '500px'}} spacing={'2rem'}>
            <TextField
              autoFocus
              id="title"
              label="Title"
              fullWidth
              variant="standard"
            />
            <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            />
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">Label</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="label"
                value={age}
                onChange={handleChange}
                label="label"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
export default NoteFormDialog;
