import { CSSProperties, useContext } from 'react';
import { ContentSectionsContext } from './ContentSections';

interface ContentSectionsHeader {
  name: string;
  title: string;
  summary: string;
  className: string;
  style: CSSProperties;
}

export type ContentSectionsHeaderProps = Partial<ContentSectionsHeader>;

export const ContentSectionsHeader = ({
  name,
  title,
  summary,
  className,
  style,
}: ContentSectionsHeaderProps) => {
  const {
    article: { header },
  } = useContext(ContentSectionsContext);

  const nameToShow = name || header?.name,
    titleToShow = title || header?.title,
    summaryToShow = summary || header?.summary;

  return (
    <div className={className} style={style}>
      <div className="lg:pr-4">
        <div className="lg:max-w-lg">
          {nameToShow && (
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {nameToShow}
            </p>
          )}
          {titleToShow && (
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {titleToShow}
            </h1>
          )}
          {summaryToShow && (
            <p className="mt-6 text-xl leading-8 text-gray-700">
              {summaryToShow}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
