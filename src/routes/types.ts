import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Home,
  About,
  Team,
  Contact,
  Search,
  SignIn,
  Register,
  Message,
  Test,
  NotFound,
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  showWhenSignedIn?: boolean;
  icon?: FC<SvgIconProps>;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
