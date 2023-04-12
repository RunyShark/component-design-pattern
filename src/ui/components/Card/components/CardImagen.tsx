import { CSSProperties, useContext } from 'react';
import { CardContext } from './Card';
import noImage from '../../../../assets/venue_default.png';

interface CardImagen {
  img: string;
  className: string;
  style: CSSProperties;
}

export type CardImagenProps = Partial<CardImagen>;

export const CardImagen = ({ img, className, style }: CardImagenProps) => {
  const {
    card: { img: contextImg },

  } = useContext(CardContext);
  const imgToShow = img || contextImg || noImage;

  return (
    <div className={`${className} w-64 h-80`} style={style}>
      <img
        src={imgToShow}
        alt={'poke'}
        className="absolute w-64 h-80 top-5 left-16"
      />

    </div>
  );
};
