import { CSSProperties, useContext } from 'react';
import { FooterContentSectionsContainer } from '../ContentSection';
import { ContentSectionsContext } from './ContentSections';

export interface ContentSectionsContainerIn {
  intro: string;
  content: String;
  footer: FooterContentSectionsContainer;
  className: string;
  style?: CSSProperties;
}

export type ContentSectionsContainerProps = Partial<ContentSectionsContainerIn>;

export const ContentSectionsContainer = ({
  intro,
  content,
  footer,
  className,
  style,
}: ContentSectionsContainerProps) => {
  const {
    article: { container },
  } = useContext(ContentSectionsContext);

  const introToShow = intro || container?.intro;
  const contentShow = content || container?.content;
  const footerHeadShow = footer?.head || container?.footer?.head;
  const footerContentShow = footer?.content || container?.footer?.content;
  return (
    <div className={className} style={style}>
      <div className="lg:pr-4">
        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
          {introToShow && <p>{introToShow}</p>}
          {contentShow && <p className="mt-8">{contentShow}</p>}
          {footerHeadShow && (
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              {footerHeadShow}
            </h2>
          )}
          {footerContentShow && <p className="mt-6">{footerContentShow}</p>}
        </div>
      </div>
    </div>
  );
};
