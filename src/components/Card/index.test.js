import React from 'react';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import renderer from 'react-test-renderer';
import { Card } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardComponent from './index';

injectTapEventPlugin();

const pokemon = {
  name: 'bulbasaur'
}

const Wrapper = mount(
  <MuiThemeProvider>
    <CardComponent pokemon={pokemon} showDetail={jest.fn()} />
  </MuiThemeProvider>
);

describe('Card', () => {

  it('Should render self and subcomponents', () => {
    expect(Wrapper.length).toEqual(1);
  });

  it('Should contain <Card />', () => {
    expect(Wrapper.find(Card).length).toEqual(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <CardComponent pokemon={pokemon} showDetail={jest.fn()} />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});