import { useParams } from 'react-router-dom';
import {
  Article,
  ContentSectionsBg,
  ContentSectionsContainer,
  ContentSectionsHeader,
  ContentSectionsImg,
  Spiner,
} from '../../ui';
import { ContentSections } from '../../ui/components/ContentSections/components/ContentSections';
import { usePokemonDetailQuery } from '../hooks/usePokemonDetailQuery';
import styles from '../styles/styles.module.css';

export const PokemonDetailPage = () => {
  const { name } = useParams();
  const { queryPokemonDetail } = usePokemonDetailQuery(name as string);

  if (queryPokemonDetail.isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spiner />
      </div>
    );
  }

  return (
    <div>
      <ContentSections article={queryPokemonDetail.data as Article}>
        <ContentSectionsBg />
        <ContentSectionsHeader />
        <ContentSectionsImg className={styles['hvr-buzz']} />
        <ContentSectionsContainer />
      </ContentSections>
    </div>
  );
};
