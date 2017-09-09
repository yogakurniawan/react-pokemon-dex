import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loader from './index';

injectTapEventPlugin();

describe('ContentList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <Loader />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});