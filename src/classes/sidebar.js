export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector);

        this.init();
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock);
        this.$el.innerHTML = this.template;
    }

    addBlock(event) {
        event.preventDefault();
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