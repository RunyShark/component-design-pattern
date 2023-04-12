import { CSSProperties, useContext } from 'react';
import { NavbarContext } from './Navbar';
import noImage from '../../../../assets/venue_default.png';
import { useNavigate } from 'react-router-dom';

interface NavbarLogo {
  logo: string;
  className: string;
  style: CSSProperties;
  onClick: () => void;
}

type NavbarLogoProps = Partial<NavbarLogo>;

export const NavbarLogo = ({
  style,
  className,
  logo,
  onClick,
}: NavbarLogoProps) => {
  const { logo: logoContext } = useContext(NavbarContext);
  const logoToShow = logo || logoContext || noImage;
  return (
    <div
      onClick={onClick}
      className={`flex flex-shrink-0 items-center  cursor-pointer  ${className}`}
      style={style}
    >
      <img
        className="hover:scale-125 cursor-pointer ease-in duration-300 hidden h-8 w-auto lg:block"
        src={logoToShow}
        alt="Your Company"
      />
    </div>
  );
};
//
