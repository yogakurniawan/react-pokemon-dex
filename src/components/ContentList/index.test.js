import React from 'react';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentList from './index';

injectTapEventPlugin();

const props = {
  loading: false,
  error: null,
  payload: [],
  showDetail: jest.fn(),
}

const Wrapper = mount(
  <MuiThemeProvider>
    <ContentList {...props} />
  </MuiThemeProvider>
);

describe('ContentList', () => {
  it('Should render self and subcomponents', () => {
    expect(Wrapper.length).toEqual(1);
  });
});