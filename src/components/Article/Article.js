import React from 'react';
import PropTypes from 'prop-types';

import './Article.less';

const Article = ({
    title,
    publicationDate
}) => (
    <div className="Article">
        <span className="Article--date">{publicationDate}</span>
        <span className="Article--title">{title}</span>
    </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired
};

export default Article;
