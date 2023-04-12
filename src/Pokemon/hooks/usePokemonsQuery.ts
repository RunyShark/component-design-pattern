import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { pokemonsDetails } from '../../helper/pokemonsDetails';

export const getPokemonsData = async (limit: number) =>
  await Promise.all(pokemonsDetails({ url: '/pokemon', limit }));

export const usePokemonsQuery = (limit: number) => {

  const navigate = useNavigate();

  const queryPokemons = useQuery(['Holawenasm'], () => getPokemonsData(limit), {
    //fech Cuando se recupera la conexión
    refetchOnReconnect: false,
    // Cuando se pierde el foco
    refetchOnWindowFocus: false,

    // staleTime: Infinity,

    //initialData:

    //placeholderData

    // retry: 1,
    onError: () => navigate('/pokeApp/home'),
    onSuccess: () => console.log('ok'),
  });

  return { queryPokemons };
};

// select: (res) =>
// res.map(({ id, name, abilities, sprites, types }) => ({
//   id,
//   name,
//   abilities: abilities.map((abilitie) => abilitie.ability.name).join(' '),
//   img: sprites.other?.dream_world.front_default,
//   types: types[0].type.name,
// })),
