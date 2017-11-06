// @flow
import React from 'react';
import ResourceCollectionStore from 'sulu-admin-bundle/stores/ResourceCollectionStore';
import {observable} from 'mobx';
import {MultiItemSelection, arrayMove} from 'sulu-admin-bundle/components';

type Props = {
    /** Current value */
    value: Array<string>,
    onChange: (value: Array<string>) => {},
};

type Item = {
    id: string,
    value: string,
};

export default class SnippetSelection extends React.PureComponent<Props> {
    resourceCollectionStore: ResourceCollectionStore;

    static defaultProps = {
        value: [],
    };

    @observable items: Array<Item> = [];

    componentWillMount() {
        const {value} = this.props;

        if (!value) {
            return;
        }

        this.resourceCollectionStore = new ResourceCollectionStore('snippets', value);
        this.resourceCollectionStore.load();
    }

    componentWillUnmount() {
        this.resourceCollectionStore.destroy();
    }

    handleItemsSorted = (oldIndex: number, newIndex: number) => {
        this.items = arrayMove(this.items, oldIndex, newIndex);
    };

    handleRemove = (itemId: string | number) => {
        this.items = this.items.filter((item) => item.id !== itemId);
    };

    handleOpenOverlay = () => {
        // todo
    };

    render() {
        return (
            <MultiItemSelection
                label="Items"
                onItemRemove={this.handleRemove}
                leftButton={{
                    icon: 'plus',
                    onClick: this.handleOpenOverlay,
                }}
                onItemsSorted={this.handleItemsSorted}
            >
                {this.resourceCollectionStore.data.map((item, index) => (
                    <MultiItemSelection.Item
                        key={item.id}
                        id={item.id}
                        index={index + 1}
                    >
                        <div>
                            {item.value}
                        </div>
                    </MultiItemSelection.Item>
                ))}
            </MultiItemSelection>
        );
    }
}
