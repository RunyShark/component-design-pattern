import { useInfiniteQuery } from '@tanstack/react-query';
import { controlAxios } from '../../helper/apiGet';
import { PokemonGet } from '../interfaces';

export const nexPage = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0',
}) => {
  await controlAxios<PokemonGet>({ url: `pokemon?limit=6&offset=0` });
};

export const useInfinitiScroll = () => {
  const queryInfinitie = useInfiniteQuery(['pokemons'], nexPage, {});
};
