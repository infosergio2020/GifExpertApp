import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('Pruebas de GifExpertApp', () => {
    const wrapper = shallow(<GifExpertApp/>)
    test('debe de verse correctamente GifExpertApp', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch','DragonBall'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })
    

})
