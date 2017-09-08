import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
import { AppBar, Chip } from 'material-ui';
import uuid from 'uuid/v1';
import { Tabs, Tab } from 'material-ui/Tabs';
import InfiniteScroll from 'react-infinite-scroller'
import { createStructuredSelector } from 'reselect';
import * as pokemonActions from 'actions/pokemon';
import * as typeActions from 'actions/type';
import ContentList from 'components/ContentList';
import Filter from 'components/Filter';
import RowDetail from 'components/RowDetail';
import Loader from 'components/Loader';
import { getQueryString, capitalizeFirstLetter, getPokemonImage } from 'utils';
import * as pokemonSelectors from 'selectors/pokemon';
import * as pokemonTypeSelectors from 'selectors/pokemonType';
import * as pokemonDetailSelectors from 'selectors/pokemonDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasMoreItems: true,
      popupOpen: false
    };
  }

  componentDidMount() {
    this.props.getPokemonType();
  }

  loadMore() {
    const { getPokemonList, nextPokemon } = this.props;
    if (nextPokemon === 'default') {
      getPokemonList(0);
    }

    if (nextPokemon && nextPokemon !== 'default') {
      getPokemonList(parseInt(getQueryString('offset', nextPokemon), 10));
    }

    if (!nextPokemon) {
      this.setState({
        hasMoreItems: false
      })
    }
  }

  openPokemon(id) {
    const { getPokemonDetail } = this.props;
    getPokemonDetail(id);
    this.setState({ popupOpen: true });
  }

  handleClosePopup = () => {
    this.setState({ popupOpen: false });
  };

  renderPokemon() {
    const { hasMoreItems } = this.state;
    const { errorLoadingPokemon, pokemon } = this.props;
    const contentListProps = {
      error: errorLoadingPokemon,
      showDetail: (id) => this.openPokemon(id),
      payload: pokemon
    };
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => this.loadMore()}
        loader={<Loader />}
        hasMore={hasMoreItems}
        useWindow={true}
      >
        <ContentList {...contentListProps} />
      </InfiniteScroll>
    );
  }

  renderDialog() {
    const { pokemonDetail, loadingPokemonDetail } = this.props;
    const { popupOpen } = this.state;
    const title = pokemonDetail && `#${pokemonDetail.id} ${capitalizeFirstLetter(pokemonDetail.name)}`;
    return (
      <Dialog
        contentStyle={{ width: '40vw' }}
        title={title}
        modal={false}
        open={popupOpen}
        onRequestClose={this.handleClosePopup}
      >
        {
          loadingPokemonDetail && <Loader />
        }
        {!loadingPokemonDetail && pokemonDetail && <div>
          <Row center="xs">
            <Col xs={12}>
              <img
                style={{ height: 150, width: 150 }}
                src={getPokemonImage(pokemonDetail.id)}
                alt={pokemonDetail.name}
              />
            </Col>
          </Row>
          <Tabs
            inkBarStyle={{ background: 'rgb(0, 171, 68)' }}
            tabItemContainerStyle={{ backgroundColor: 'transparent' }}
          >
            <Tab style={{ color: 'rgb(0, 171, 68)' }} label="Profile" >
              <RowDetail label="Type" content={(
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {pokemonDetail.types.map(({ type }) => (
                    <Chip style={{ margin: 4 }} key={uuid()}>
                      {type.name}
                    </Chip>
                  ))}
                </div>
              )} />
              <RowDetail label="Height" content={pokemonDetail.height} />
              <RowDetail label="Weight" content={pokemonDetail.weight} />
              <RowDetail label="Base Experience" content={pokemonDetail.base_experience} />
              <RowDetail label="Abilities" content={pokemonDetail.abilities.map(({ ability }) => (
                <span key={uuid()}>{ability.name}<br /></span>
              ))} />
            </Tab>
            <Tab style={{ color: 'rgb(0, 171, 68)' }} label="Stats" >

            </Tab>
          </Tabs>
        </div>}
      </Dialog>
    )
  }

  renderPokemonByType() {
    const { errorLoadingPokemonByType, loadingPokemonByType, pokemonByType } = this.props;
    const contentListProps = {
      loading: loadingPokemonByType,
      error: errorLoadingPokemonByType,
      showDetail: (id) => this.openPokemon(id),
      payload: pokemonByType
    };
    return (
      <ContentList {...contentListProps} />
    );
  }

  onFilterChange = (evt, _, value) => {
    const { setFilter, getPokemonListByType } = this.props;
    setFilter(value);
    if (value !== 'all') {
      getPokemonListByType(value);
    }
  }

  render() {
    const { filter, pokemonTypes } = this.props;
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Pokedex"
        />
        <Filter
          value={filter}
          items={pokemonTypes}
          onChange={(evt, index, value) => this.onFilterChange(evt, index, value)} />
        {this.renderDialog()}
        {filter === 'all' && this.renderPokemon()}
        {filter !== 'all' && this.renderPokemonByType()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getPokemonList: pokemonActions.getPokemonList,
  getPokemonDetail: pokemonActions.getPokemonDetail,
  getPokemonType: typeActions.getPokemonType,
  getPokemonListByType: typeActions.getPokemonListByType,
  setFilter: typeActions.setFilter
};

const mapStateToProps = createStructuredSelector({
  pokemon: pokemonSelectors.pokemon(),
  errorLoadingPokemon: pokemonSelectors.errorLoadingPokemon(),
  nextPokemon: pokemonSelectors.nextPokemon(),
  pokemonDetail: pokemonDetailSelectors.pokemonDetail(),
  loadingPokemonDetail: pokemonDetailSelectors.loadingPokemonDetail(),
  pokemonTypes: pokemonTypeSelectors.pokemonTypes(),
  pokemonByType: pokemonTypeSelectors.pokemonByType(),
  loadingPokemonByType: pokemonTypeSelectors.loadingPokemonByType(),
  errorLoadingPokemonByType: pokemonTypeSelectors.errorLoadingPokemonByType(),
  filter: pokemonTypeSelectors.filter()
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
