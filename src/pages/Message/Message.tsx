import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import Footer from '@/sections/Footer';

const Message = () => {
  const navigate = useNavigate();
  return (
    <>
      <Meta title="about" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Application Successful
        </Typography>
        <Typography component="p" variant="body2" align="center" color="text.primary" gutterBottom>
          Your application will be reviewed and you will receive an email to confirm.
        </Typography>
        <Typography component="p" variant="body2" align="center" color="text.primary" gutterBottom>
          If you do not receive a response within a few days, please email clcstesting79@gmail.com
        </Typography>
      </Container>
      <Stack sx={{ pt: 4, pb: 12 }} direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          sx={{ width: 100 }}
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </Button>
      </Stack>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
};

export default Message;
