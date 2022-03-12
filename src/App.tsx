/* eslint-disable react/jsx-props-no-spreading */

import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from './containers/routes';
import store from './store';

function Containers() {

  return (
    <Provider store={store}>
      <div className="app">
        <Suspense fallback={<p>Loading</p>}>
          <BrowserRouter>
            <Switch>
              {ROUTES.map((route) => (
                <Route
                  key={route.key}
                  exact={route.exact}
                  path={`${route.path}`}
                  component={(props: any) => (
                    <route.component
                      {...props}
                    />
                  )}
                />
              ))}
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div >
    </Provider>
  );
}

export default Containers;
