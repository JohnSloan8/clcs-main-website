/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import React from 'react';
import { SetterOrUpdater } from 'recoil';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import { useLanguage, useLevel, useTestType } from '@/store/search';
import { useApiURL } from '@/store/search';

interface SelectTestProps {
  selectFor?: string;
  currentSelected?: string;
  listOfItems?: string[];
  setSelected?: SetterOrUpdater<string[]>;
}

const SelectTest = ({
  selectFor = 'language',
  currentSelected = 'French',
  listOfItems = ['french', 'Irish'],
  setSelected = () => {
    console.log('settingLanguages');
  },
}: SelectTestProps) => {
  const apiURLBase = useApiURL() + 'api/';
  const { setLanguage } = useLanguage();
  const { setLevel } = useLevel();
  const { setTestType } = useTestType();
  const changeTest = (event: any) => {
    if (event.target.name === 'language') {
      setLanguage(event.target.value);
    } else if (event.target.name === 'level') {
      setLevel(event.target.value);
    } else if (event.target.name === 'test-type') {
      setTestType(event.target.value);
    }
  };

  useEffect(() => {
    if (listOfItems.length === 1) {
      const apiURL = apiURLBase + selectFor + 's';
      axios.get(apiURL).then((data) => {
        const tempArray: string[] = ['All'];
        data.data.data.forEach((d: any) => {
          tempArray.push(d.attributes.name);
        });
        setSelected(tempArray);
      });
    } else {
      console.log('already called the api');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ px: 2, display: 'flex', justifyContent: 'center' }}>
      <FormControl>
        <FormLabel>
          <Typography variant="h6" align="center">
            {selectFor.replace('-', ' ')}
          </Typography>
        </FormLabel>
        <Select
          value={currentSelected}
          name={selectFor}
          defaultValue="All"
          onChange={(e) => {
            changeTest(e);
          }}
          sx={{ width: '160px' }}
        >
          {listOfItems.map((l) => (
            <MenuItem key={l} value={l}>
              {l}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTest;
