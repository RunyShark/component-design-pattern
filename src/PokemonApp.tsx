import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeroSections, Layout } from './ui';

export const PokemonApp = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
