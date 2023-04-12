import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, NavbarLogo, NavbarProp, NavbarRoutes } from '../components';

const navigation: NavbarProp[] = [
  { id: 1, name: 'Home', href: '/pokeApp/home', active: true },
  { id: 2, name: 'pokemons', href: '/pokeApp/list', active: false },
];

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar navigation={navigation}>
        {({ restart }) => (
          <>
            <NavbarLogo
              logo="https://i.pinimg.com/originals/3f/53/20/3f5320bda51f29d0e6ef7a61d030c234.png"
              onClick={restart}
            />
            <NavbarRoutes />

            <button
              onClick={restart}
              className="sm:ml-6 sm:block rounded bg-indigo-500 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Test
            </button>
          </>
        )}
      </Navbar>
      <div className="mx-auto max-w-7xl pt-10">{children}</div>
    </div>
  );
};
