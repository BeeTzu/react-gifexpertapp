import { GifGridItem } from '../../components/GifGridItem';
import '../../setupTests';
import React from 'react';
import { shallow } from 'enzyme';


describe('Pruebas en GifGridItem', () => {
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem/>);
        expect(wrapper).toMatchSnapshot();
    });
});
