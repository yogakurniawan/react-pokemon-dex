import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';
import { AppBar, CircularProgress } from 'material-ui';
import { Tabs, Tab } from 'material-ui/Tabs';
import InfiniteScroll from 'react-infinite-scroller'
import { createStructuredSelector } from 'reselect';
import * as pokemonActions from 'actions/pokemon';
import * as typeActions from 'actions/type';
import ContentList from 'components/ContentList';
import Filter from 'components/Filter';
import { getQueryString, capitalizeFirstLetter, getPokemonImage } from 'utils';
import * as selectors from './selectors';

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

  renderLoader() {
    return <Row center="xs">
      <Col xs={12}>
        <CircularProgress size={50} />
      </Col>
    </Row>;
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
        loader={this.renderLoader()}
        hasMore={hasMoreItems}
        useWindow={true}
      >
        <ContentList {...contentListProps} />
      </InfiniteScroll>
    );
  }

  renderDialog() {
    const { pokemonDetail, loadingPokemon } = this.props;
    const { popupOpen } = this.state;
    if (!pokemonDetail) {
      return <div></div>;
    }

    if (loadingPokemon && popupOpen) {
      debugger;
      return this.renderLoader();
    }
    return (
      <Dialog
        title={`#${pokemonDetail.id} ${capitalizeFirstLetter(pokemonDetail.name)}`}
        modal={false}
        open={popupOpen}
        onRequestClose={this.handleClosePopup}
      >
        <div>
          <img src={getPokemonImage(pokemonDetail.id)} alt={pokemonDetail.name} />
          <Tabs
            inkBarStyle={{ background: 'rgb(0, 171, 68)' }}
            tabItemContainerStyle={{ backgroundColor: 'transparent' }}
          >
            <Tab style={{ color: 'rgb(0, 171, 68)' }} label="Profile" >

            </Tab>
            <Tab style={{ color: 'rgb(0, 171, 68)' }} label="Stats" >

            </Tab>
          </Tabs>
        </div>
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
        {filter === 'all' && this.renderPokemon()}
        {filter !== 'all' && this.renderPokemonByType()}
        {this.renderDialog()}
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
  pokemon: selectors.pokemon(),
  loadingPokemon: selectors.loadingPokemon(),
  pokemonDetail: selectors.pokemonDetail(),
  errorLoadingPokemon: selectors.errorLoadingPokemon(),
  nextPokemon: selectors.nextPokemon(),
  pokemonTypes: selectors.pokemonTypes(),
  pokemonByType: selectors.pokemonByType(),
  loadingPokemonByType: selectors.loadingPokemonByType(),
  errorLoadingPokemonByType: selectors.errorLoadingPokemonByType(),
  filter: selectors.filter()
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
