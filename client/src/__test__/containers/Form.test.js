import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Form from '../../containers/Form';

describe('<Form />', () => {
    let form = mount(
        <ProviderMock>
            <Form />
        </ProviderMock>
    );

    it('Render del componente Form', () => {
        expect(form.length).toEqual(1);
    });

    it('Debe renderizar un form <form />', () => {
        expect(form.find("form").exists()).toEqual(true);
    });

    it('El form contiene 5 inputs', () => {
        expect(form.find('.form--input')).toHaveLength(5);
    })
    it('El form contiene dos <div /> en los que irán las listas', () => {
        expect(form.find('#container-checkbox')).toHaveLength(2);
    })
})