/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import Meta from '@/components/Meta';
import MarkdownToHTML from '@/components/TestComponents/MarkdownToHTML';
import Footer from '@/sections/Footer';
import { useAbout } from '@/store/about';
import { useApiURL } from '@/store/search';

function About() {
  const { about, setAbout } = useAbout();
  const apiURL = useApiURL() + 'api/abouts';

  useEffect(() => {
    axios.get(apiURL).then((data) => {
      setAbout(data.data.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Meta title="about" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          About
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Card sx={{ mx: 2, my: 5, p: 0 }}>
          <CardMedia
            component="img"
            image="https://www.tcd.ie/slscs/lscs/assets/images/LLC_IMG_4608-2.jpg"
            alt="students studying"
          />
        </Card>
        {about.map((a: any, i) => (
          <Card key={i} sx={{ m: 2, p: 3 }}>
            <CardContent>
              <MarkdownToHTML markdown={a.attributes.Blurb} />
            </CardContent>
          </Card>
        ))}
        <Card sx={{ m: 2, p: 5 }}>
          <Typography component="h1" variant="body1" color="text.primary" align="left" gutterBottom>
            This work is licensed under a{' '}
            <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
              Creative Commons Attribution-NonCommercial 4.0 International License
            </a>
          </Typography>
          <Box
            sx={{ width: '100%', pt: 2 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ width: '120px' }}>
              <CardActionArea href="http://creativecommons.org/licenses/by-nc/4.0/">
                <CardMedia
                  component="img"
                  image="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"
                  alt="Creative Commons Licence"
                />
              </CardActionArea>
            </Box>
          </Box>
        </Card>
      </Container>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
}

export default About;
