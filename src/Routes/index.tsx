import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HomePage } from '../Home';
import { PokemonDetailPage, PokemonsPage } from '../Pokemon/Pages';
import { PokemonApp } from '../PokemonApp';

export const router = createBrowserRouter([
  {
    path: '/pokeApp',
    element: <PokemonApp />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'list', element: <PokemonsPage /> },
      { path: 'pokemon/:name', element: <PokemonDetailPage /> },
      { path: '*', element: <Navigate to="list" /> },
    ],
  },
  {
    path: '/',
    element: <Navigate to="pokeApp/list" />,
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);
