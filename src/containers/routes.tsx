import React, { lazy } from 'react';

import { Redirect } from 'react-router-dom';

const Home = lazy(() => import('./Home'));

export const ROUTES = [
  {
    path: '/',
    component: Home,
    key: 'home',
    exact: false
  },
  {
    path: '*',
    component: () => <Redirect to="/" />,
    exact: false,
    key: 'matchAll'
  }
];
