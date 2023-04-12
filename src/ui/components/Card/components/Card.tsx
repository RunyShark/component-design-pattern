import { createContext, CSSProperties, MouseEventHandler } from 'react';
import { CardPropsValues } from '../card';
import { CardDivider } from './CardDivider';
import { CardImagen } from './CardImagen';
import { CardText } from './CardText';
import { CardTitle } from './CardTitle';

export interface CardProps {
  card: CardPropsValues;
  children: JSX.Element | JSX.Element[];
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
}

interface CardContextProps {
  card: CardPropsValues;
}

export const CardContext = createContext({} as CardContextProps);
const { Provider } = CardContext;

export const Card = ({
  children,
  card,
  onClick,
  onMouseEnter,
  className,
  style,
}: CardProps) => {
  return (
    <Provider value={{ card }}>
      <div
        className={`p-4 rounded-3xl hover:scale-105 cursor-pointer ease-in duration-200 max-w-sm drop-shadow-2xl ${className}`}
        style={style}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <div className="p-4">{children}</div>
      </div>
    </Provider>
  );
};

