import {model} from './model';
import {title, text, textColumns} from './templates';
import './css/main.css';

const site = document.querySelector('#site');

model.forEach( block => {
    let html;
    if(block.type === 'title') {
        html = title(block);
    } else if(block.type === 'text') {
        html = text(block);
    } else if(block.type === 'textColumns') {
        html = textColumns(block);
    }

    site.insertAdjacentHTML('beforeend', html);
})

