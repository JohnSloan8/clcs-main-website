import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import emailjs from '@emailjs/browser';

import Meta from '@/components/Meta';
import Footer from '@/sections/Footer';
import { useConReq, useContacted } from '@/store/contact';

const Contact = () => {
  const navigate = useNavigate();
  const { setContacted } = useContacted();
  const { conReq, setConReq } = useConReq();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [conButtonVisible, setConButtonVisible] = useState(true);
  const form = useRef();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail() || !validateName()) {
      alert('You must provide a name at least 3 letters long and a valid email address');
    } else {
      setConButtonVisible(false);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const thisForm = form.current!;
      setConReq(false);
      emailjs
        .sendForm('clcs_testing_access', 'template_70hyoo9', thisForm, 'zHWEy4oaID1-c0hRN')
        .then(
          (result) => {
            setContacted(true);
            navigate('/contactSent');
            console.log(result.text);
          },
          (error) => {
            alert(
              'Error occured. Sorry about this. Please try again later or get in touch with us at clcstesting79@gmail.com',
            );
            setConReq(true);
            setConButtonVisible(true);
            console.log('error:', error);
          },
        );
    }
  };

  const validateEmail = (): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateName = (): boolean => {
    const re = /^[A-Za-z\s]{3,26}$/;
    return re.test(name);
  };

  return (
    <>
      <Meta title="Contact" />
      <Container maxWidth="xs" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Contact
        </Typography>
        <Typography component="p" variant="body2" align="center" color="text.primary" gutterBottom>
          Contact us by emailing clcstestin79@gmail.com, or by filling in the form below.
        </Typography>
        {!conReq && conButtonVisible && (
          <Box component="form" ref={form} onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Name"
              name="user_name"
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={4}
              id="message"
              label="Message"
              name="message"
            />

            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Send Message
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
};

export default Contact;
