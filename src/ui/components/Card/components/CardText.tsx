import { CSSProperties, useContext } from 'react';
import { CardContext } from './Card';

interface CardText {
  text: string;
  className: string;
  style: CSSProperties;
}

export type CardTextProps = Partial<CardText>;

export const CardText = ({ text, className, style }: CardTextProps) => {
  const {
    card: { text: contexText },
  } = useContext(CardContext);

  const titleToShow = text || contexText;

  return (
    <p className={`font-sans leading-relaxed ${className}`} style={style}>
      {titleToShow}
    </p>
  );
};
