import { blue, deepOrange } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { Themes } from './types';

const sharedTheme = {
  palette: {
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#fff',
        paper: '#fff',
      },
      primary: {
        main: blue[800],
        dark: blue[900],
        light: blue[50],
      },
      secondary: {
        main: deepOrange[800],
        dark: deepOrange[900],
        light: deepOrange[200],
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#fafafa',
        paper: '#fff',
      },
      primary: {
        main: blue[800],
        dark: blue[900],
        light: blue[200],
      },
      secondary: {
        main: deepOrange[800],
        dark: deepOrange[900],
        light: deepOrange[200],
      },
    },
  }),
};

export default themes;
