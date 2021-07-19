import React from "react";
import { shallow } from 'enzyme';//es parecido al render pero con mas potencial
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de gifexpert', () => {
    
    test('Debe de mostrar <GifGridItem /> correctamente', () => {
        const url = 'https://media.tenor.com/images/8f91571e84d8e808fa519529408c20a1/tenor.gif';
        const titulo = 'Hola soy Goku';
        const wrapper = shallow( <GifGridItem title={titulo} url={url} />);
        expect( wrapper ).toMatchSnapshot();
    })
})
