import React from "react";
import { shallow } from 'enzyme';//es parecido al render pero con mas potencial
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
    const url = 'https://media.tenor.com/images/8f91571e84d8e808fa519529408c20a1/tenor.gif';
    const titulo = 'Hola soy Goku';
    const wrapper = shallow( <GifGridItem title={titulo} url={url} />);
    
    test('Debe de mostrar <GifGridItem /> correctamente', () => {        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(titulo);
    })

    test('debe de tener la imagen igual al url y el alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);
    })
    
    test('debe tener la constante animate__fadeIn ', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__flipInX')).toBe( true );
    })
    

})
