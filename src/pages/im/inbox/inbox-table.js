import React from 'react';
import  './inbox-table.less';
import './search-box.less';
import InboxItem from './inbox-item';
import Icon from '../../../moudle/icon/icon';


import { connect } from 'dva';

class InboxTable extends React.Component{
  
     render() {

        var {notifications} = this.props;

        if(notifications==null) return null;

        console.log(`InboxTable:this is the notifications ${this.props}`);
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
                        {
                            notifications.map(notification => 
                                <li className = 'list-item'>
                                <InboxItem
                                    notification = {notification}
                                />
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )

     }
}


 function mapStateToProps(state) {
     const {notifications} = state.im;
     return {notifications};
   }

 export default connect(mapStateToProps)(InboxTable);
//export default InboxTable;