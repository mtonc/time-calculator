import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Tab = ({name, route}) => {
    return (
        <Link to={route} className="tab-link">
            {name}
        </Link>
    );
}

export default withRouter(Tab);