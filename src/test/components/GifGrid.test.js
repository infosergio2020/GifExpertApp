import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid >', () => {
    const category = 'One Punch';
    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar items cuando se cargan imagenes', () => {
        
        
        const gifs = [
            {
                id:'ABC',
                url:'https://cualquiercosa.com',
                title: 'CualquierCosa'
            },
            {
                id:'123',
                url:'https://cualquiercosa.com',
                title: 'CualquierCosa'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category } />)
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
    
})
