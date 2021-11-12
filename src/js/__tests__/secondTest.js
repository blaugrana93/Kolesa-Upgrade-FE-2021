//import '../bigUntestableCode';
import LoaderClass from '../LoaderClass'
const loader = new LoaderClass();


test('нету  div с id #app', () => {
    const data = document.querySelector('#app');
    expect(data).toEqual(null);
});

test('нету  div с id #loader', () => {
    
    loader.loaderClassShow();
    console.log(data);
    expect(data).toMatchSnapshot();
});