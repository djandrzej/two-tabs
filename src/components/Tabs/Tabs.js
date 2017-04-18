import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import TabLink from '../TabLink';

import './Tabs.less';

export default class Tabs extends PureComponent {

    static propTypes = {
        children: PropTypes.node.isRequired,
        onChange: PropTypes.func.isRequired,
        selectedTabIndex: PropTypes.number
    };

    static defaultProps = {
        selectedTabIndex: 0
    };

    render() {
        const {children, onChange, selectedTabIndex} = this.props;
        const currentTab = children[selectedTabIndex];
        return (
            <div className="Tabs">
                <div className="Tabs-header">
                    <ul className="Tabs-header-list">
                        {React.Children.map(children, (tab, index) => (
                            <TabLink
                                key={index}
                                index={index}
                                label={tab.props.label}
                                isSelected={selectedTabIndex === index}
                                onClick={onChange}
                            />
                        ))}
                    </ul>
                </div>
                <div className="Tabs-content">
                    {currentTab}
                </div>
            </div>
        );
    }

}
