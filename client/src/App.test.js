import React from 'react';
import { mount, shallow } from 'enzyme';
// import ProviderMock from '../src/__mocks__/providerMock';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from './store';
import App from './App';
import Home from './containers/Home';
import Form from './containers/Form';
import Detail from './containers/Detail';

describe('App', () => {
  xit('El componente Home debe renderizar en la ruta /home', () => {
    const app = mount(
      <Provider store={store} >
        <MemoryRouter initialEntries={[ '/home']} >
          <App />
        </MemoryRouter>
      </Provider>
    );
    
    expect(app.find(Home)).toHaveLength(1);
  })
})
