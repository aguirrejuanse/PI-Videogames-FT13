import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

describe('<Header />', () => {
    let header = mount(
        <ProviderMock>
            <Header />
        </ProviderMock>
    );

    it('Render del componente Header', () => {
        expect(header.length).toEqual(1);
    });

    it('Debe renderizar una imagen <img />', () => {
        expect(header.find(".header__img").html()).toEqual('<img class=\"header__img\" src=\"[object Object]\" alt=\"Logo de Henry\">');
    });

    it('deberia renderizar dos componentes <Link>', () => {
        expect(header.find(Link)).toHaveLength(2)
    });

    it('El primer <Link> deberia redirigir a "/home",' , () => {
        expect(header.find(Link).at(0).prop('to')).toEqual('/home')
    });

    it('El segundo <Link> deberia redirigir a "/home/create",' , () => {
        expect(header.find(Link).at(1).prop('to')).toEqual('/home/create')
    });
})