// @flow
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import type {ButtonConfig} from './types';
import itemStyles from './item.scss';

type Props = {
    id: string | number,
    children: string,
    selected: boolean,
    hasChildren: boolean,
    buttons?: Array<ButtonConfig>,
    onClick: (id: string | number) => void,
};

export default class Item extends React.Component<Props> {
    handleOnClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.id);
        }
    };

    createButtons = () => {
        const {buttons} = this.props;

        if (!buttons) {
            return null;
        }

        return buttons.map((button: ButtonConfig, index: number) => {
            const key = `button-${index}`;
            const handleClick = () => {
                button.onClick(this.props.id);
            };

            return (
                <Icon className={itemStyles.button} key={key} name={button.icon} onClick={handleClick} />
            );
        });
    };

    render() {
        const {children, selected, hasChildren} = this.props;

        const itemClass = classNames(
            itemStyles.item,
            {
                [itemStyles.isSelected]: selected,
                [itemStyles.hasChildren]: hasChildren,
            }
        );

        return (
            <div onClick={this.handleOnClick} className={itemClass}>
                <span className={itemStyles.buttons}>
                    {this.createButtons()}
                </span>
                <span className={itemStyles.text}>{children}</span>
                {hasChildren &&
                    <Icon className={itemStyles.icon} name="chevron-right" />
                }
            </div>
        );
    }
}
