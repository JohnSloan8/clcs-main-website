import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import SelectTest from '@/components/SelectTest';
import Tests from '@/components/Tests';
import { CenteredFlexBox } from '@/components/styled';
import {
  useLanguage,
  useLanguages,
  useLevel,
  useLevels,
  useTestType,
  useTestTypes,
} from '@/store/search';

function Search() {
  const { languages, setLanguages } = useLanguages();
  const { levels, setLevels } = useLevels();
  const { testTypes, setTestTypes } = useTestTypes();
  const { language, setLanguage } = useLanguage();
  const { level, setLevel } = useLevel();
  const { testType, setTestType } = useTestType();

  const resetSearch = () => {
    setLanguage('All');
    setLevel('All');
    setTestType('All');
  };

  return (
    <>
      <Meta title="search" />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
          Search
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <SelectTest
            selectFor="language"
            listOfItems={languages}
            currentSelected={language}
            setSelected={setLanguages}
          />
          <SelectTest
            selectFor="level"
            listOfItems={levels}
            currentSelected={level}
            setSelected={setLevels}
          />

          <SelectTest
            selectFor="test-type"
            listOfItems={testTypes}
            currentSelected={testType}
            setSelected={setTestTypes}
          />
        </Stack>
      </Container>
      <Tests />
      <CenteredFlexBox mt={4}>
        <Button variant="outlined" size="large" onClick={resetSearch}>
          reset all
        </Button>
      </CenteredFlexBox>
    </>
  );
}

export default Search;
