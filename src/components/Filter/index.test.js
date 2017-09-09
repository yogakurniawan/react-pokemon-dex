import React from 'react';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Filter from './index';

injectTapEventPlugin();

const props = {
  onChange: jest.fn(),
  items: [],
  value: ""
}

const Wrapper = mount(
  <MuiThemeProvider>
    <Filter {...props} />
  </MuiThemeProvider>
);

describe('Filter', () => {
  it('Should render self and subcomponents', () => {
    expect(Wrapper.length).toEqual(1);
  });

  it('Should contain <Filter />', () => {
    expect(Wrapper.find(Filter).length).toEqual(1);
  });
});