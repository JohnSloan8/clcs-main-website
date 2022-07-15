import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';

const Message = () => {
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
          If you do not receive a response within a few days, please email a@a.com.
        </Typography>
      </Container>
    </>
  );
};

export default Message;
