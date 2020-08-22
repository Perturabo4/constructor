import { TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;

        this.init();
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this));
        this.$el.innerHTML = this.template;
    }

    addBlock(event) {
        event.preventDefault();
        const type = event.target.name;
        const value = event.target.value.value;
        const style = event.target.style.value;

        const Constructor = type === 'text' ? TextBlock : TitleBlock;

        const newBlock = new Constructor(value, {styles: style});

        this.update(newBlock);

        event.target.value.value = '';
        event.target.style.value = '';
    }

    get template() {
        return [
            block('title'),
            block('text')
        ].join('');
    }
}

function block(type) {
    return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input type="text" class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input type="text" class="form-control form-control-sm" name="style" placeholder="style">
        </div>
        <button type="submit" class="btn btn-primary btn-sm" type="submit">Добавить</button>
    </form>
    <hr>
    `
}