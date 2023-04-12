import {
  ContentSectionsContainerProps,
  ContentSectionsHeaderProps,
} from '../components';

export interface FooterContentSectionsContainer {
  head: string;
  content: String;
}

export interface Article {
  header?: ContentSectionsHeaderProps;
  container?: ContentSectionsContainerProps;
  img?: string;
}
