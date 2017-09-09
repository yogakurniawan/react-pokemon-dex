import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Filter from './index';

injectTapEventPlugin();

const props = {
  items: [],
  value: "",
  onChange: jest.fn()
}

describe('Filter', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <Filter {...props} />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});