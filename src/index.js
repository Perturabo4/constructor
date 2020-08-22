import {model} from './model';
import { Sidebar } from './classes/sidebar';
import { Site } from './classes/site';
import './css/main.css';

const site = new Site('#site');

const updateCallback = (newBlock) => {
    model.push(newBlock);
    site.render(model);
}

const sidebar = new Sidebar('#panel', updateCallback);

site.render(model);


