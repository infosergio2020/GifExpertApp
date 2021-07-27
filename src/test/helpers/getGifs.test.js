import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGisfs Fetch',  () => {

    const key = 'dpoD26YubbJ6ixDgvXuW7Qc9cH7vVvxc';
    const value = 10;

    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch',value,key);
        expect( gifs.length ).toBe( 10 );
    })
    
})
