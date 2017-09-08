export const extractId = (uri) => {
  if (!uri) return;

  return uri.match(/\/\d+\/$/g)[0].replace(/\//g, '');
}

export const capitalizeFirstLetter = (string) => {
  if (!string) return;

  const firstWord = string.match(/^\w+/g)[0];
  return `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(1)}`;
}

export const getQueryString = (field, url) => {
  var href = url ? url : window.location.href;
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
};

export const getPokemonImage = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;