/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import Meta from '@/components/Meta';
import MarkdownToHTML from '@/components/TestComponents/MarkdownToHTML';
import Footer from '@/sections/Footer';
import { usePeople } from '@/store/people';
import { useApiURL } from '@/store/search';

function Team() {
  const { people, setPeople } = usePeople();
  const apiURL = useApiURL() + 'api/people?populate=*';

  useEffect(() => {
    axios.get(apiURL).then((data) => {
      const sortedData = data.data.data.sort((a: any, b: any) => (a.id > b.id ? 1 : -1));
      setPeople(sortedData);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Meta title="page 3" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Team
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ mb: 8, mt: 4 }}>
        {people.map((p: any, i) => (
          <Card key={i} sx={{ m: 2, pt: 2, px: 2 }}>
            <CardHeader
              sx={{ p: 1 }}
              avatar={
                <Avatar alt="avatar" src={p.attributes.ImageURL} sx={{ width: 64, height: 64 }} />
              }
              title={p.attributes.Name}
              subheader={p.attributes.Email}
            />
            <CardContent sx={{ py: 0, px: 2 }}>
              <MarkdownToHTML markdown={p.attributes.Description} />
            </CardContent>
          </Card>
        ))}
      </Container>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
}

export default Team;
