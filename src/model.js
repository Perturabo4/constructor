import rex from './assets/rex.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks';
import { css } from './utils';

export const model =  [
    new TitleBlock('Test Title', {
        tag: 'h2',
        styles: css({
            background: 'darkred',
            color: '#fff',
            'text-align': 'center'
        })
    } ),
    new ImageBlock(rex, {
        alt: 'T-REX',
        styles: css({
            'text-align': 'center'
        }),
        imageStyles: css({
            width: '300px'
        })
    }),
    new TextBlock('Text content', {
        styles: css({
            background: 'steelblue',
            color: 'white'
        })
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