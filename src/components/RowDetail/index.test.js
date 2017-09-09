import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentList from './index';

injectTapEventPlugin();

const props = {
  label: "",
  content: ""
}

describe('ContentList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <ContentList {...props} />
      </MuiThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});