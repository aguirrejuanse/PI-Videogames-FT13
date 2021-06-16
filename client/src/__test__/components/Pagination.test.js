import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Pagination from '../../components/Pagination';

describe('<Pagination />', () => {
    let pagination = mount(
        <ProviderMock>
            <Pagination  />
        </ProviderMock>
    );

    it('Render del componente Pagination', () => {
        expect(pagination.length).toEqual(1);
    });

    it('Pagination contiene un <ul>', () => {
        expect(pagination.find('ul')).toHaveLength(1); 
    })
})