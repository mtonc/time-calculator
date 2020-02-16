import React from 'react'
import Tab from '../Tab/Tab'

import './tablist.scss'

const TabList = ({list}) => {

    return (
        <div className="tab-list" >
            {
                list.map(({id, ...otherProps}) => {
                    return (
                        <Tab className="tab" key={id} {...otherProps}/>
                    )
                })
            }
        </div>
    );
}

export default TabList