import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import List from '../List';
import Article from '../Article';

export default class RssFeed extends PureComponent {

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        fetch: PropTypes.func.isRequired,
        articles: PropTypes.array.isRequired
    };

    componentDidMount() {
        const {isFetching, fetch} = this.props;
        if (!isFetching) {
            fetch();
        }
    }

    render() {
        const {isFetching, articles} = this.props;
        return (
            <div className="RssFeed">
                {isFetching ? <Loader/> : (
                    <List title="Newest articles"
                          items={articles}
                          itemRenderer={Article}
                    />
                )}
            </div>
        );
    }

}
