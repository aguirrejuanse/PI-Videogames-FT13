import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Home from '../../containers/Home';
import Header from '../../components/Header';
import Search from '../../components/Search';
import AllGames from '../../components/AllGames';
import Footer from '../../components/Footer';

describe('<Home />', () => {
    let home = mount(
        <ProviderMock>
            <Home />
        </ProviderMock>
    );

    let genres = [{"id":1,"name":"Action","createdAt":"2021-06-15T19:00:02.589Z","updatedAt":"2021-06-15T19:00:02.589Z"},{"id":2,"name":"Indie","createdAt":"2021-06-15T19:00:02.936Z","updatedAt":"2021-06-15T19:00:02.936Z"},{"id":3,"name":"Casual","createdAt":"2021-06-15T19:00:02.961Z","updatedAt":"2021-06-15T19:00:02.961Z"},{"id":4,"name":"Simulation","createdAt":"2021-06-15T19:00:03.016Z","updatedAt":"2021-06-15T19:00:03.016Z"},{"id":5,"name":"Shooter","createdAt":"2021-06-15T19:00:02.958Z","updatedAt":"2021-06-15T19:00:02.958Z"},{"id":6,"name":"Adventure","createdAt":"2021-06-15T19:00:02.949Z","updatedAt":"2021-06-15T19:00:02.949Z"},{"id":7,"name":"RPG","createdAt":"2021-06-15T19:00:02.944Z","updatedAt":"2021-06-15T19:00:02.944Z"},{"id":8,"name":"Puzzle","createdAt":"2021-06-15T19:00:03.026Z","updatedAt":"2021-06-15T19:00:03.026Z"},{"id":9,"name":"Strategy","createdAt":"2021-06-15T19:00:02.956Z","updatedAt":"2021-06-15T19:00:02.956Z"},{"id":10,"name":"Arcade","createdAt":"2021-06-15T19:00:03.040Z","updatedAt":"2021-06-15T19:00:03.040Z"},{"id":11,"name":"Platformer","createdAt":"2021-06-15T19:00:03.048Z","updatedAt":"2021-06-15T19:00:03.048Z"},{"id":12,"name":"Racing","createdAt":"2021-06-15T19:00:03.056Z","updatedAt":"2021-06-15T19:00:03.056Z"},{"id":13,"name":"Massively Multiplayer","createdAt":"2021-06-15T19:00:03.058Z","updatedAt":"2021-06-15T19:00:03.058Z"},{"id":14,"name":"Sports","createdAt":"2021-06-15T19:00:03.065Z","updatedAt":"2021-06-15T19:00:03.065Z"},{"id":15,"name":"Fighting","createdAt":"2021-06-15T19:00:03.075Z","updatedAt":"2021-06-15T19:00:03.075Z"},{"id":16,"name":"Family","createdAt":"2021-06-15T19:00:03.078Z","updatedAt":"2021-06-15T19:00:03.078Z"},{"id":17,"name":"Board Games","createdAt":"2021-06-15T19:00:03.079Z","updatedAt":"2021-06-15T19:00:03.079Z"},{"id":18,"name":"Educational","createdAt":"2021-06-15T19:00:03.081Z","updatedAt":"2021-06-15T19:00:03.081Z"},{"id":19,"name":"Card","createdAt":"2021-06-15T19:00:03.083Z","updatedAt":"2021-06-15T19:00:03.083Z"}];
    

    it('Render del componente Home', () => {
        expect(home.length).toEqual(1);
    });
    
    it('Debe renderizar <Header /> una sola vez', () => {
        expect(home.find(Header)).toHaveLength(1);
    });

    it('Debe renderizar <Search /> una sola vez', () => {
        expect(home.find(Search)).toHaveLength(1);
    });

    // xit('<Search /> debe recibir como genres por prop con el valor "genres" ', () => {
    //     expect(home.contains(<Search genres={genres} />)).toDeepEqual(true);
    // })

    xit('Debe renderizar <AllGames /> una sola vez', () => {
        expect(home.find(AllGames)).toHaveLength(2);
    });

    it('Debe renderizar <Footer /> una sola vez', () => {
        expect(home.find(Footer)).toHaveLength(1);
    });
});
