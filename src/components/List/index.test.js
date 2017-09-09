import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from './index';

injectTapEventPlugin();

const props = {
  items: [],
  showDetail: jest.fn()
}

describe('List', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <List {...props} />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});