import React from 'react';
import { shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();//nos permite saber como fue llamada si fue llamada y cuantas veces y mas...
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    })

    test('debe de mostrarse correctamente', () => {    
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target:{ value:value } });
        expect(wrapper.find('p').text().trim()).toBe(value)
    })
    
    test('no debe de postear la info onsubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        
        // si esto se llama una vez revisar que no haya datos en el input
        // solucion hacer un beforeEach
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el set categories y limpiar la caja de texto', () => {

        const value = 'Hola mundo';
        const input = wrapper.find('input');
        const form =  wrapper.find('form');
        // debe de simular el inputchange
        input.simulate('change', { target:{ value } });
        // debe de simular el submit
        form.simulate('submit', {preventDefault(){}});
        // setCategories se debe de haber llamado

        // expect( setCategories ).toHaveBeenCalled();
        // expect( setCategories ).toHaveBeenCalledTimes(1);
        // expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // el valor del input debe de estar ''
        expect( input.prop('value') ).toBe('');
    });
    
})
