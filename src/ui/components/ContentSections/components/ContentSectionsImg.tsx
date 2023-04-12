import { CSSProperties, useContext } from 'react';
import { ContentSectionsContext } from './ContentSections';
import noImage from '../../../../assets/venue_default.png';

interface ContentSectionsImg {
  img: string;
  className: string;
  style: CSSProperties;
}
type ContentSectionsImgPorps = Partial<ContentSectionsImg>;

export const ContentSectionsImg = ({
  img,
  className,
  style,
}: ContentSectionsImgPorps) => {
  const {
    article: { img: contextImg },
  } = useContext(ContentSectionsContext);

  let imgToShow;
  img
    ? (imgToShow = img)
    : contextImg
    ? (imgToShow = contextImg)
    : (imgToShow = noImage);

  return (
    <div
      className={`mt-2  p-12  lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ${className} drop-shadow-2xl`}
      style={style}
    >
      <img
        className="hover:rotate-6 ease-in duration-300 w-[28rem] sm:w-[27rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 p-3"
        src={imgToShow}
        alt="test"
      />
    </div>
  );
};
