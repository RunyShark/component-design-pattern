import { useQueryClient } from '@tanstack/react-query';

import { getPokemon } from './usePokemonDetailQuery';

export const usePrefetch = () => {
  const queryClient = useQueryClient();
  const prefetchQuery = (name: string) =>
    queryClient.prefetchQuery(
      ['PokemonDetail', `${name}`],
      () => getPokemon(name),
      {
        // staleTime: 1000 * 60 * 60,
        // initialDataUpdatedAt: new Date().getTime() + 10000,
      }
    );

  return {
    prefetchQuery,
  };
};
