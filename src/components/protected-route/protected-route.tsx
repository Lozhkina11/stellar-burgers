import { Preloader } from '@ui';
import { Navigate } from 'react-router';
import { useSelector } from '../../services/store';
import { selectIsChecked, selectIsAuthenticated } from '../../services/user';
import { useLocation } from 'react-router-dom';

type TProtectedRoutesProps = {
  children: React.ReactElement;
  guest?: boolean;
};

export const ProtectedRoutes = ({ children, guest }: TProtectedRoutesProps) => {
  const isUserAuth = useSelector(selectIsAuthenticated);
  const isAuthChecked = useSelector(selectIsChecked);
  const location = useLocation();

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (!guest && !isUserAuth) {
    return <Navigate to={'/login'} replace state={{ from: location }} />;
  }

  if (guest && isUserAuth) {
    console.log(location.state?.from);
    // return <Navigate to={`${location.state?.from || '/'}`} />;
    return <Navigate to={'/'} />;
  }

  return children;
};
