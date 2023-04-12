import { CSSProperties, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from './Navbar';

interface NavbarRoutes {
  className: string;
  style: CSSProperties;
}

type NavbarRoutesProps = Partial<NavbarRoutes>;

export const NavbarRoutes = ({ className, style }: NavbarRoutesProps) => {
  const { browse, routes } = useContext(NavbarContext);
  return (
    <div className={`sm:ml-6 sm:block ${className}`} style={style}>
      <div className="flex space-x-4">
        {routes.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`${
              item.active
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            } rounded-md px-3 py-2 text-sm font-medium`}
            // onClick={() => browse(item.id)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
