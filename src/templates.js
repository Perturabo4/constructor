import { row, col } from "./utils";

function title(block) {
    return row (
        col(`<h1>${block.value}</h1>`),
        block.options.styles
    );
}

function text(block) {
    return row(
            col(`<p>${block.value}</p>`),
            block.options.styles
    );
}

function textColumns(block) {
    const html = block.value.map( item => col(item))
    return row(html.join(""), block.options.styles);
}

export const templates = {
    title,
    text,
    textColumns
}
