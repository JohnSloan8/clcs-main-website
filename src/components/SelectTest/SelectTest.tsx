import { useEffect } from 'react';
import { SetterOrUpdater } from 'recoil';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import { useApiURL } from '@/store/search';

interface SelectTestProps {
  selectFor?: string;
  currentSelected?: string;
  listOfItems?: string[];
  setSelected?: SetterOrUpdater<string[]>;
  onClick?: () => void;
}

const SelectTest = ({
  selectFor = 'language',
  currentSelected = 'French',
  listOfItems = ['french', 'Irish'],
  setSelected = () => {
    console.log('settingLanguages');
  },
  onClick = () => {
    console.log('clicked');
  },
}: SelectTestProps) => {
  const apiURLBase = useApiURL() + 'api/';

  useEffect(() => {
    if (listOfItems.length === 1) {
      const apiURL = apiURLBase + selectFor + 's';
      console.log('apiURL:', apiURL);
      axios.get(apiURL).then((data) => {
        const tempArray: string[] = [];
        data.data.data.forEach((d) => {
          tempArray.push(d.attributes.name);
        });
        setSelected([...listOfItems, ...tempArray]);
      });
    } else {
      console.log('already called the api');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ p: 2 }}>
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
          onChange={onClick}
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
