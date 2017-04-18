import React from 'react';
import PropTypes from 'prop-types';

import './List.less';

const List = ({
    title,
    items,
    itemRenderer,
    ordered
}) => (
    <div className="List">
        {!!title && <div className="List--title">{title}</div>}
        <ul className="List--content">
            {items.map((item, index) => (
                <li className="List--item" key={index}>
                    {ordered && <span className="List--item-index">{index + 1}.</span>}
                    {itemRenderer(item)}
                </li>
            ))}
        </ul>
    </div>
);

List.propTypes = {
    title: PropTypes.node,
    items: PropTypes.array.isRequired,
    itemRenderer: PropTypes.func,
    ordered: PropTypes.bool
};

List.defaultProps = {
    itemRenderer: item => item.toString(),
    ordered: false
};

export default List;
