export * from './CardDivider';
export * from './CardImagen';
export * from './CardText';
export * from './CardTitle';
export * from './Card';

import { CardHOCProps } from '../interfaces';
import { Card as CardHOC } from './Card';
import { CardDivider } from './CardDivider';
import { CardImagen } from './CardImagen';
import { CardText } from './CardText';
import { CardTitle } from './CardTitle';

export const Card: CardHOCProps = Object.assign(CardHOC, {
  Imagen: CardImagen,
  Title: CardTitle,
  Text: CardText,
  Divider: CardDivider,
});
