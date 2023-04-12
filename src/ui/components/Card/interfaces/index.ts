import {
  CardCardDividerProps,
  CardImagenProps,
  CardProps,
  CardTextProps,
  CardTitleProps,
} from '../card';

export interface CardPropsValues {
  name?: string;
  title: string;
  type: string;
  img?: string;
  text: string;
}

export interface CardHOCProps {
  ({
    children,
    card,
    onClick,
    onMouseEnter,
    className,
    style,
  }: CardProps): JSX.Element;
  Imagen: ({ img, className, style }: CardImagenProps) => JSX.Element;
  Title: ({ className, style, title }: CardTitleProps) => JSX.Element;
  Text: ({ text, className, style }: CardTextProps) => JSX.Element;
  Divider: ({ className, style }: CardCardDividerProps) => JSX.Element;
}
