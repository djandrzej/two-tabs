import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import cx from 'classnames';

import './TabLink.less';

export default class TabLink extends PureComponent {

    static propTypes = {
        index: PropTypes.number.isRequired,
        label: PropTypes.node.isRequired,
        isSelected: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    };

    @autobind
    handleClick() {
        this.props.onClick(this.props.index);
    }

    render() {
        const {label, isSelected} = this.props;
        return (
            <li onClick={this.handleClick}
                className={cx('TabLink', {
                    'TabLink--selected': isSelected
                })}>
                {label}
            </li>
        );
    }

}
