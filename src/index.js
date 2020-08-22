import {model} from './model';
import { Sidebar } from './classes/sidebar';
import { Site } from './classes/site';
import './css/main.css';

const site = new Site('#site');
const sidebar = new Sidebar('#panel');

site.render(model);


