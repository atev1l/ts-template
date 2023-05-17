import '../assets/styles/base.scss';

import { Suspense } from 'react';

import { RootProvider } from '../app/providers';
import { AppRouter } from '../app/router/Router';

function App() {
  //return <div>222</div>;

  return (
    <Suspense>
      <RootProvider>
        <AppRouter />
      </RootProvider>
    </Suspense>
  );
}

export default App;
