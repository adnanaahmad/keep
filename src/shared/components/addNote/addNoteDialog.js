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
import { useFormik } from 'formik';

const NoteFormDialog = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      label: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              fullWidth
              variant="standard"
            />
            <TextField
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            multiline
            rows={4}
            fullWidth
            variant="standard"
            />
            <FormControl variant="standard" fullWidth>
              <InputLabel id="select">Label</InputLabel>
              <Select
                labelId="select"
                id="label"
                name="label"
                label="Label"
                value={formik.values.label}
                onChange={formik.handleChange}
                error={formik.touched.label && Boolean(formik.errors.label)}
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
          <Button onClick={formik.handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
export default NoteFormDialog;
