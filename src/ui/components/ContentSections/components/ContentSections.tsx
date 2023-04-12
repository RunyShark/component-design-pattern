import { createContext, ReactElement } from 'react';
import { Article } from '../ContentSection';

interface ContentSectionsProps {
  article: Article;
  children: ReactElement | ReactElement[];
}

interface ContentSectionsPropsContext {
  article: Article;
}

export const ContentSectionsContext = createContext(
  {} as ContentSectionsPropsContext
);
const { Provider } = ContentSectionsContext;

export const ContentSections = ({
  article,
  children,
}: ContentSectionsProps) => {
  return (
    <Provider
      value={{
        article,
      }}
    >
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2  lg:grid lg:w-full lg:gap-x-8 lg:px-8 mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {children}
        </div>
      </div>
    </Provider>
  );
};
