import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    
    it('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });

    it('Footer contiene un <a>', () => {
        expect(footer.find('a')).toHaveLength(1); 
    })
})
