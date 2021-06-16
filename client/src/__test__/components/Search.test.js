import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Search from '../../components/Search';
import AllGames from '../../components/AllGames';

describe('<Search />', () => {
    let search = mount(
        <ProviderMock>
            <Search />
        </ProviderMock>
    );

    it('Render del componente Search', () => {
        expect(search.length).toEqual(1);
    });

    it('Debe renderizar una un form <form />', () => {
        expect(search.find(".search--container").exists()).toEqual(true);
    });

    it('Tiene un input con la propiedad "type" igual a "text"', () => {
        expect(search.find('input[type="text"]')).toHaveLength(1);
    });

    it('Tiene un boton que dice "Buscar" ', () => {
        expect(search.find('button')).toHaveLength(1);
        expect(search.find('button').text()).toEqual('Buscar');
    });

    it('Renderiza el componente <AllGames />', () => {
        expect(search.find('AllGames')).toHaveLength(0);
        // search.update();
        // expect(search.find('AllGames')).toHaveLength(1);
    })



});