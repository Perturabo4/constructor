import rex from './assets/rex.jpg';
import {Block} from './classes/blocks';

export const model =  [
    new Block('title', 'Test Title', {
        tag: 'h2',
        styles: 'background: darkred; color: #fff; text-align: center;'
    } ),
    new Block('image', rex, {
        alt: 'T-REX',
        styles: 'text-align: center;',
        imageStyles: 'width: 300px; max-width: 100%;'
    }),
    new Block('text', 'Text content', {
        styles: 'background: blue; color: #4c4c4c;'
    }),
    new Block('textColumns', [
        '1 text',
        '2 text',
        '3 text'
    ],
    {
        styles: 'padding: 1rem;'
        }
    )
]