import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { controlAxios } from '../../helper/apiGet';
import { PokemonDetails } from '../interfaces';

export const getSpecies = async (name: string) =>
  await controlAxios<PokemonDetails>({ url: `pokemon-species/${name}` });

export const getPokemon = async (name: string) =>
  await controlAxios<PokemonDetails>({ url: `pokemon/${name}` });

export const usePokemonDetailQuery = (name: string) => {
  const navigate = useNavigate();

  const queryTypePokemon = useQuery(['speciePokemon'], () => getSpecies(name), {
    enabled: name !== null,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    onError: () => navigate('/pokeApp/home'),
  });

  const queryPokemonDetail = useQuery(
    ['PokemonDetail  ', `${name}`],
    () => getPokemon(name),
    {
      //Cada x tiempo hace de nuevo la solicitud
      // refetchInterval: 1000,
      // Depende de la otra query
      enabled: queryTypePokemon.data !== undefined,

      staleTime: Infinity,

      //cacheTime numero o Infinity
      cacheTime: Infinity,

      //Esta función se activará cada vez que la consulta obtenga con éxito nuevos datos.
      onSuccess: () => console.log('wenas'),

      //Esta función se activará si la consulta encuentra un error y se pasará el error.
      onError: () => navigate('/pokeApp/home'),

      select: (res) => ({
        header: {
          title: name,
          summary: `Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.`,
        },
        container: {
          intro: `F  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          distinctio dolores sed a nostrum, asperiores optio dicta quibusdam vero,
          molestiae labore sequi cum laudantium aperiam repudiandae quisquam quasi
          fugiat earum?`,
          content: `F  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          distinctio dolores sed a nostrum, asperiores optio dicta quibusdam vero,
          molestiae labore sequi cum laudantium aperiam repudiandae quisquam quasi
          fugiat earum?`,
          footer: {
            head: 'Pokemon',
            content: `F  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            distinctio dolores sed a nostrum, asperiores optio dicta quibusdam vero,
            molestiae labore sequi cum laudantium aperiam repudiandae quisquam quasi
            fugiat earum?`,
          },
        },
        img: res.sprites.other?.dream_world.front_default,
      }),
    }
  );

  return { queryPokemonDetail, queryTypePokemon };
};
//
