import React from 'react';
import  './inbox-table.less';
import './search-box.less';
import InboxItem from './inbox-item';
import Icon from '../../../moudle/icon/icon';

class InboxTable extends React.Component{
     render() {
        return(
            <div className = 'inbox-table flex-space flex-vert'>
                <div className = 'inbox-searchbox flex-static'>
                    <div className = 'search-box'>
                          <Icon name = 'search'
                                size = {18}
                          />
                          <input type = 'text' id = 'searchBox' className = 'input' placeholder = "Instant-search (ctrl + /)"/>
                    </div>
                </div>
                <div id = 'scroll' className = "inbox-scroll flex-space thin-scroll">
                    <ul>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                        <li className = 'list-item'><InboxItem/></li>
                    </ul>
                </div>
            </div>
        )

     }
}

export default InboxTable;