import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card';
import { extractId, capitalizeFirstLetter, getPokemonImage } from 'utils';

const styles = {
  media: {
    height: 150,
    width: 150,
    margin: '0 auto'
  },
  button: {
    fontSize: 14,
    margin: '0 auto'
  }
};

function CardComponent({ pokemon, classes, showDetail }) {
  const { url, name } = pokemon;
  const pokemonId = extractId(url);
  const pokemonImage = getPokemonImage(pokemonId);
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardMedia>
        <img src={pokemonImage} alt={name} />
      </CardMedia>
      <CardTitle titleStyle={{ fontSize: 16 }} title={capitalizeFirstLetter(name)} />
      <CardActions>
        <FlatButton
          primary
          label="Show Detail"
          style={styles.button}
          onClick={() => showDetail(pokemonId)}
        />
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {
  pokemon: PropTypes.object.isRequired,
  showDetail: PropTypes.func.isRequired
};

CardComponent.defaultProps = {
};

export default CardComponent;
