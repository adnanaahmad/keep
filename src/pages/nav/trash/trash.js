import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Trash() {
  return (
    <Box sx={{ width: '100%'}}>
      <Typography variant="h1" component="div" gutterBottom>
        h1. Trash
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
    </Box>
  );
}