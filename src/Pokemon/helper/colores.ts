export const ColorPokemon = (color: string) => {
  const colors: any = {
    grass: '#87cdb3',
    water: '#87b8cd',
    fire: '#cd8b87',
    bug: '#BDECB6',
    electric: '#EFA94A',
    ground: '#E4CDA1',
    ice: '#BDDEEC',
    white: '#87c5cd',

    normal: '#cdbe87cd',
    psychic: '#BDB2FF',

    poison: '#a987cdcd',
    fairy: '#cd87cdcd',
    dragon: '#68A093',
    ghost: '#373037cd',
    black: '#1d1c28cd',
  };
  return colors[color] || colors.black;
};
