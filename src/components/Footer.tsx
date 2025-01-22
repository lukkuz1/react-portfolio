import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Lukas Kuzmickas. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
