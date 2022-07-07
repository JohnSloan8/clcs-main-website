import { atom, useRecoilState, useRecoilValue } from 'recoil';

import DisplayTest from '@/models/DisplayTest';

const languagesState = atom({
  key: 'languagesState',
  default: ['All'],
});

const languageState = atom({
  key: 'languageState',
  default: 'All',
});

const levelsState = atom({
  key: 'levelsState',
  default: ['All'],
});

const levelState = atom({
  key: 'levelState',
  default: 'All',
});

const testTypesState = atom({
  key: 'testTypesState',
  default: ['All'],
});

const testTypeState = atom({
  key: 'testTypeState',
  default: 'All',
});

const testsState = atom({
  key: 'testsState',
  default: [] as DisplayTest[],
});

const apiURLState = atom({
  key: 'apiURLState',
  default: 'https://clcs-strapi-backend.herokuapp.com/',
});

const currentTestState = atom({
  key: 'currentTesttate',
  default: {
    id: 1,
    text: 'e',
    blanks: 'e',
    title: 'e',
    language: 'e',
    level: 'e',
    test_type: 'e',
    url: 'e',
  } as DisplayTest,
});

const testsDisplayState = atom({
  key: 'testsDisplayState',
  default: [] as DisplayTest[],
});

function useLanguages() {
  const [languages, setLanguages] = useRecoilState(languagesState);
  return { languages, setLanguages };
}

function useLanguage() {
  const [language, setLanguage] = useRecoilState(languageState);
  return { language, setLanguage };
}

function useLevels() {
  const [levels, setLevels] = useRecoilState(levelsState);
  return { levels, setLevels };
}

function useLevel() {
  const [level, setLevel] = useRecoilState(levelState);
  return { level, setLevel };
}

function useTestTypes() {
  const [testTypes, setTestTypes] = useRecoilState(testTypesState);
  return { testTypes, setTestTypes };
}

function useTestType() {
  const [testType, setTestType] = useRecoilState(testTypeState);
  return { testType, setTestType };
}

function useTests() {
  const [tests, setTests] = useRecoilState(testsState);
  return { tests, setTests };
}

function useTestsDisplay() {
  const [testsDisplay, setTestsDisplay] = useRecoilState(testsDisplayState);
  return { testsDisplay, setTestsDisplay };
}

function useApiURL() {
  const apiURL = useRecoilValue(apiURLState);
  return apiURL;
}

function useCurrentTest() {
  const [currentTest, setCurrentTest] = useRecoilState(currentTestState);
  return { currentTest, setCurrentTest };
}

export {
  useLanguages,
  useLevels,
  useTestTypes,
  useLanguage,
  useLevel,
  useTestType,
  useTests,
  useTestsDisplay,
  useApiURL,
  useCurrentTest,
};
