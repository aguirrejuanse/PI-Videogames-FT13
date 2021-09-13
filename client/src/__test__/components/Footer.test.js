import React from 'react';
import { mount } from 'enzyme';
//snapshot
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    
    it('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });

    it('Footer contiene un <a>', () => {
        expect(footer.find('a')).toHaveLength(1); 
    })
});

describe('Footer Snapshot', () => {
    it('Comprobar UI', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    })
})
