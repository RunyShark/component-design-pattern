import { CSSProperties, useContext } from 'react';
import { CardContext } from './Card';

interface CardTitle {
  title: string;
  className: string;
  style: CSSProperties;
}

export type CardTitleProps = Partial<CardTitle>;

export const CardTitle = ({ className, style, title }: CardTitleProps) => {
  const {
    card: { title: contexTitle },
  } = useContext(CardContext);

  const titleToShow = title || contexTitle;

  return (
    <h1 style={style} className={`font-bold text-3xl text-center ${className}`}>
      {titleToShow}
    </h1>
  );
};
