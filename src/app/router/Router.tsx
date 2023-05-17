import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteHandler } from './RouteHandler';
import { routerConfig } from './RouterConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path, isPrivate }) => (
          <Route
            key={path}
            path={path}
            element={
              <RouteHandler
                isPrivate={isPrivate}
                source={isPrivate ? <div>{element}</div> : <div>{element}</div>}
              />
              // eslint-disable-next-line max-len
              /*TODO: сделать два лэйатуа для авторизованного и неавторизованного контента*/
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
