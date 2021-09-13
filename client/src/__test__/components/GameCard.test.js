import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import ProviderMock from '../../__mocks__/providerMock';
import GameMock from '../../__mocks__/gameMock';
import GameCard from '../../components/GameCard';

describe('<GameCard />', () => {
    
    let gameCard = mount(
        <ProviderMock>
            <GameCard  games={GameMock}/>
        </ProviderMock>
    );

    let gameCardShallow = shallow(
        <ProviderMock>
            <GameCard  games={GameMock}/>
        </ProviderMock>
    );
    console.log(gameCard)

    it('Render del componente GameCard', () => {
        expect(gameCard.length).toEqual(1);
    });

    it('Debe renderizar un div que sera el container de cada juego', () => {
        expect(gameCard.find('.card')).toHaveLength(1);
    })

    it('Renderiza el nombre del juego en un h4 ', () => {
        expect(gameCard.find('h4')).toHaveLength(1);
        const name = GameMock.name;
        expect(gameCard.find('h4').text()).toEqual(name);
    });

    it('deberia renderizar un componentes <Link>', () => {
        expect(gameCard.find(Link)).toHaveLength(1);
    });

    it('<Link> deberia redirigir a "/home/detail/${game.id}",' , () => {
        expect(gameCard.find(Link).at(0).prop('to')).toEqual(`/home/detail/${GameMock.id}`);
    });

    it('<Link> debe contener dos botones' , () => {
        expect(gameCard.find('button')).toHaveLength(2);
    });

    it('El boton de <Link> debe decir "Ver detalles" ', () => {
        expect(gameCard.find('.card__details--button').text()).toEqual('Ver detalles');
    });

    xit('Comprobar que funciona el botón  "Ver detalles', () => {
        gameCardShallow.find('.card__details--button').simulate('click');
        expect(gameCardShallow.find('.card__details--button')).toHaveBeenCalledTimes(1);
    })

})
