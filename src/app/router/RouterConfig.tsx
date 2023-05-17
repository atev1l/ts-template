import { RouteProps } from 'react-router-dom';

import { RouteKeys } from '../../constants';
import { HomePage, LoginPage } from '../ui/pages';

type RoutePropsType = RouteProps & {
  isPrivate: boolean;
  wrapper?: (source: React.ReactNode) => React.ReactNode;
};

export const RoutePath: Record<RouteKeys, string> = {
  [RouteKeys.HOME]: '/',
  [RouteKeys.LOGIN]: '/login',
};

export const routerConfig: Record<RouteKeys, RoutePropsType> = {
  [RouteKeys.HOME]: {
    isPrivate: true,
    // TODO: сделать нормальный лэйаут
    //wrapper: (children) => (<div>{children}</div>),
    path: RoutePath.home,
    element: <HomePage />,
  },
  [RouteKeys.LOGIN]: {
    isPrivate: false,
    // TODO: сделать нормальный лэйаут
    //wrapper: (children) => (<div>{children}</div>),
    path: RoutePath.login,
    element: <LoginPage />,
  },
};
