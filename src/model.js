import rex from './assets/rex.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks';

export const model =  [
    new TitleBlock('Test Title', {
        tag: 'h2',
        styles: 'background: darkred; color: #fff; text-align: center;'
    } ),
    new ImageBlock(rex, {
        alt: 'T-REX',
        styles: 'text-align: center;',
        imageStyles: 'width: 300px; max-width: 100%;'
    }),
    new TextBlock('Text content', {
        styles: 'background: blue; color: #4c4c4c;'
    }),
    new TextColumnsBlock( [
        '1 text',
        '2 text',
        '3 text'
    ],
    {
        styles: 'padding: 1rem;'
        }
    )
]