import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import SelectTest from '@/components/SelectTest';
import Tests from '@/components/Tests';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
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
      <FullSizeBox
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxwidth="sm">
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Search Tests
          </Typography>
        </Container>
        <CenteredFlexBox>
          <IconButton
            onClick={resetSearch}
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <RestartAltIcon />
          </IconButton>
        </CenteredFlexBox>
        <CenteredFlexBox sx={{ pb: 4 }}>
          <SelectTest
            selectFor="language"
            listOfItems={languages}
            currentSelected={language}
            setSelected={setLanguages}
            onClick={changeTest}
          />
          <SelectTest
            selectFor="level"
            listOfItems={levels}
            currentSelected={level}
            setSelected={setLevels}
            onClick={changeTest}
          />
          <SelectTest
            selectFor="test-type"
            listOfItems={testTypes}
            currentSelected={testType}
            setSelected={setTestTypes}
            onClick={changeTest}
          />
        </CenteredFlexBox>
        <Tests />
      </FullSizeBox>
    </>
  );
}

export default Search;
