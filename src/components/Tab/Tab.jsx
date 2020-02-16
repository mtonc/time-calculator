import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import './tab.scss'

const Tab = ({name, route}) => {
    return (
        <NavLink to={route} className="tab-link" activeClassName="active">
            {name}
        </NavLink>
    );
}

export default withRouter(Tab);