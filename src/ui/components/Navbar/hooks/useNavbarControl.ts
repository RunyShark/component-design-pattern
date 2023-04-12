import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarProp } from '../Navbar';

interface useNavbarControlProps {
  navigation: NavbarProp[];
}

export const useNavbarControl = ({ navigation }: useNavbarControlProps) => {
  const [routes, setRoutes] = useState<NavbarProp[]>(navigation);
  const navigate = useNavigate();
  const path = useLocation();

  const browse = (id: number | string) => {
    const routeNav = routes.map((nav) => {
      if ([nav.id, nav.href].includes(id)) {
        return {
          ...nav,
          active: true,
        };
      }
      return {
        ...nav,
        active: false,
      };
    });
    setRoutes(routeNav);
  };

  useEffect(() => {
    browse(path.pathname);
  }, [path]);

  const restart = () => navigate('/pokeApp/home');

  return {
    routes,
    browse,
    restart,
  };
};
