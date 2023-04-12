import { createContext, CSSProperties } from 'react';
import { NavbarHandlers, NavbarProp, useNavbarControl } from '../Navbar';

interface NavbarContextProps {
  routes: NavbarProp[];
  browse: (id: number) => void;
  restart: () => void;
  logo?: string;
  onClick?: () => void;
}

export const NavbarContext = createContext({} as NavbarContextProps);
const { Provider } = NavbarContext;

interface NavbarProps {
  children: (args: NavbarHandlers) => JSX.Element;
  navigation: NavbarProp[];
  className?: string;
  style?: CSSProperties;
  logo?: string;
  onClick?: () => void;
}

export const Navbar = ({
  children,
  navigation,
  className,
  style,
  logo,
  onClick,
}: NavbarProps) => {
  const { browse, routes, restart } = useNavbarControl({ navigation });

  return (
    <Provider
      value={{
        browse,
        routes,
        restart,
        logo,
        onClick,
      }}
    >
      <nav className={`bg-gray-800 ${className}`} style={style}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {children({ restart })}
          </div>
        </div>
      </nav>
    </Provider>
  );
};
