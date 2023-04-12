import { useNavigate } from 'react-router-dom';
import { Card, Spiner } from '../../ui';
import { ColorPokemon } from '../helper/colores';
import { usePokemonsQuery, usePrefetch } from '../hooks';

export const PokemonsPage = () => {
  const { queryPokemons } = usePokemonsQuery(100);
  const { prefetchQuery } = usePrefetch();
  const navigate = useNavigate();
  // console.log({
  //   data: queryPokemons.data,
  //   isLoading: queryPokemons.isLoading,
  //   isFetching: queryPokemons.isFetching,
  //   error: queryPokemons.error,
  //   isError: queryPokemons.isError,
  //   isPaused: queryPokemons.isPaused,
  //   query: queryPokemons,
  // });
  return (
    <>
      {queryPokemons.isLoading && (
        <div className="flex justify-center items-center">
          <Spiner />
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {queryPokemons.data?.map(({ id, name, abilities, sprites, types }) => (
          <Card
            key={id}
            card={{
              text: `
                 Pokémon tipo ${types[0].type.name}
                 Abilitie: ${abilities.map(
                   (abilitie) => abilitie.ability.name
                 )}`,
              title: name,
              type: types[0].type.name,
              img: sprites.other?.dream_world.front_default,
              name: name,
            }}
            onClick={() => navigate(`/pokeApp/pokemon/${name}`)}
            // onMouseEnter={() => prefetchQuery(name)}
            style={{
              background: `radial-gradient(circle at 50% 0%, ${ColorPokemon(
                types[0].type.name
              )} 50%, #ffff 36%)`,
            }}
          >
            <Card.Imagen />
            <Card.Title />
            <Card.Divider />
            <Card.Text />
          </Card>
        ))}
      </div>
    </>
  );
};
// img="https://img-9gag-fun.9cache.com/photo/a7EZb1e_460s.jpg"

// {queryPokemons.data?.map(({ id, name, abilities, img, types }) => (
//   <Card
//     key={id}
//     card={{
//       text: `
//          Pokémon tipo ${types}
//          Abilitie: ${abilities}`,
//       title: name,
//       type: types,
//       img,
//       name,
//     }}
//     onClick={() => navigate(`/pokeApp/pokemon/${name}`)}
//     // onMouseEnter={() => prefetchQuery(name)}
//     style={{
//       background: `radial-gradient(circle at 50% 0%, ${ColorPokemon(
//         types
//       )} 50%, #ffff 36%)`,
//     }}
