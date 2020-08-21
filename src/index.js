import {model} from './model';
import './css/main.css';


const site = document.querySelector('#site');

model.forEach( block => {
    site.insertAdjacentHTML('beforeend', block.toHTML());
})

