import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

import { useRootStore } from '../../hooks/useRootStore';
import { RoutePath } from './RouterConfig';

interface RouteHandlerProps {
  isPrivate: boolean;
  source: React.ReactNode;
}

export const RouteHandler = observer((props: RouteHandlerProps) => {
  const { authStore } = useRootStore();

  if (props.isPrivate && !authStore.getIsAuth)
    return <Navigate to={RoutePath.login} />;
  else return <>{props.source}</>;
});
