import { PokemonDetails } from '../Pokemon/interfaces';
import { controlAxios } from './apiGet';

interface PokemonsDetailsProps {
  url: string;
  limit?: number;
}

export const pokemonsDetails = ({
  url,
  limit = 10,
}: PokemonsDetailsProps): Promise<PokemonDetails>[] => {
  let numberPokemon: number = limit;

  const ArrPromesas: Promise<PokemonDetails>[] = [];

  while (numberPokemon !== 0) {
    numberPokemon--;
    ArrPromesas.push(
      controlAxios<PokemonDetails>({ url: `${url}/${numberPokemon + 1}` })
    );
  }

  return ArrPromesas.reverse();
};
