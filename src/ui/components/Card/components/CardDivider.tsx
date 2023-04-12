import { CSSProperties } from 'react';

interface CardCardDivider {
  className: string;
  style: CSSProperties;
}

export type CardCardDividerProps = Partial<CardCardDivider>;

export const CardDivider = ({ className, style }: CardCardDividerProps) => (
  <div
    className={`inset-0 flex items-center w-full border-t border-gray-300 mt-4 mb-4 ${className}`}
    style={style}
    aria-hidden="true"
  />
);
