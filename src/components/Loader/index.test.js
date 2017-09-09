import React from 'react';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loader from './index';

injectTapEventPlugin();

const Wrapper = mount(
  <MuiThemeProvider>
    <Loader />
  </MuiThemeProvider>
);

describe('Loader', () => {
  it('Should render self and subcomponents', () => {
    expect(Wrapper.length).toEqual(1);
  });

  it('Should contain <Loader />', () => {
    expect(Wrapper.find(Loader).length).toEqual(1);
  });
});