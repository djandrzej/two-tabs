import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import List from '../List';

const MAX_ITEM_COUNT = 5;

export default class VarnishStats extends PureComponent {

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        fetch: PropTypes.func.isRequired,
        hostnames: PropTypes.array.isRequired,
        files: PropTypes.array.isRequired,
    };

    componentDidMount() {
        const {isFetching, fetch} = this.props;
        if (!isFetching) {
            fetch();
        }
    }

    render() {
        const {isFetching, hostnames, files} = this.props;
        return (
            <div className="VarnishStats">
                {isFetching ? <Loader/> : (
                    <span>
                        <List title="Top 5 hosts"
                              items={hostnames.splice(0, MAX_ITEM_COUNT)}
                              ordered={true}
                        />
                        <List title="Top 5 files"
                              items={files.splice(0, MAX_ITEM_COUNT)}
                              ordered={true}
                        />
                    </span>
                )}
            </div>
        );
    }

}
