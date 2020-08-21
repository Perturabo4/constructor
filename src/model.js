export const model =  [
    {
    type: 'title',
    value: 'Test Title',
    options: {
            styles: 'background: darkred; color: #fff;'
        }
    },
    {
        type: 'text',
        value: 'Text content',
        options: {
                styles: 'background: blue; color: #4c4c4c;'
            }
    },
    {
        type: 'textColumns',
        value: [
            '1 text',
            '2 text',
            '3 text'
        ],
        options: {
            styles: 'padding: 1rem;'
            }
    }
]