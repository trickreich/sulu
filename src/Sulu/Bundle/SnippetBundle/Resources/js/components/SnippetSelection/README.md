`SnippetSelection`

```
initialState = {
    selected: false,
};

const imageSizes = [
    {
        url: 'http://lorempixel.com/300/200',
        label: '300/200',
    },
    {
        url: 'http://lorempixel.com/600/300',
        label: '600/300',
    },
    {
        url: 'http://lorempixel.com/150/200',
        label: '150/200',
    }
];

const handleSelection = () => {
    setState({
        selected: !state.selected,
    });
};

const handleClick = (id) => {
    setState({
        selected: !state.selected,
    });
};

const value = [
    '1',
    '2',
];

<SnippetSelection
    value={value}
/>
```
