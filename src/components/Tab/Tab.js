import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Tab extends PureComponent {

    static propTypes = {
        children: PropTypes.node.isRequired,
        label: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="Tab">
                {this.props.children}
            </div>
        );
    }

}
