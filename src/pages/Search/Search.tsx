import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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

  const changeTest = (event) => {
    if (event.target.name === 'language') {
      setLanguage(event.target.value);
    } else if (event.target.name === 'level') {
      setLevel(event.target.value);
    } else if (event.target.name === 'test-type') {
      setTestType(event.target.value);
    }
  };

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
        <Grid container align="center">
          <Grid item xs={12} sm={4}>
            <SelectTest
              selectFor="language"
              listOfItems={languages}
              currentSelected={language}
              setSelected={setLanguages}
              onClick={changeTest}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectTest
              selectFor="level"
              listOfItems={levels}
              currentSelected={level}
              setSelected={setLevels}
              onClick={changeTest}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectTest
              selectFor="test-type"
              listOfItems={testTypes}
              currentSelected={testType}
              setSelected={setTestTypes}
              onClick={changeTest}
            />
          </Grid>
        </Grid>
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
