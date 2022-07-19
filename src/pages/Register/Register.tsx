import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import emailjs from '@emailjs/browser';

import Meta from '@/components/Meta';
import { useRegReq, useRegistered } from '@/store/auth';

const Register = () => {
  const navigate = useNavigate();
  const { setRegistered } = useRegistered();
  const { regReq, setRegReq } = useRegReq();
  const form = useRef();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const thisForm = form.current!;
    console.log('thisForm:', thisForm);
    event.preventDefault();
    setRegReq(false);
    emailjs.sendForm('clcs_testing_access', 'template_bbz84s3', thisForm, 'zHWEy4oaID1-c0hRN').then(
      (result) => {
        setRegistered(true);
        navigate('/message');
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <>
      <Meta title="register" />
      <Container maxWidth="xs" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Register
        </Typography>
        <Typography component="p" variant="body2" align="center" color="text.primary" gutterBottom>
          To gain access to tests from CLCS, please fill out the following form. We will get back to
          you as soon as possible.
        </Typography>
        <Box component="form" ref={form} onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Name"
            name="user_name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="user_email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            id="message"
            label="Reason for Request"
            name="message"
          />
          {!regReq && (
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Request Access
              </Button>
            </Stack>
          )}
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </>
  );
};

export default Register;
