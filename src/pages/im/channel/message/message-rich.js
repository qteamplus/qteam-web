import './message-rich.less';

import React from 'react';
import {PropTypes as T} from 'prop-types';
import Immutable from 'immutable';

import UserAlias from '../../../user/user-alias';
import RelativeTime from '../../../../moudle/relative-time/relative-time';


class MessageRich extends React.Component {
    render () {
        return (
            <div className = 'message-rich flex-horiz flex-vstart'>
                <div className = 'author flex-static'>
                    <span className = 'avatar flex-static img-circle background-cover' style = {{backgroundImage: "url(https://dn-st.qbox.me/user_default_avatars/20.png)"}}>
                    </span>
                </div>
                <div className = 'container flex-fill flex-vert'>
                    <div className = 'title flex-fill flex-horiz flex-vcenter'>
                         <UserAlias/>
                         <RelativeTime/>
                    </div>
                    <div className = 'body flex-vend flex-horiz'>
                         这是一条普通消息
                    </div>
                </div>
            </div>
        )
    }
}

MessageRich.propType = {
    isFavorite: T.bool,
    isDuplicated:T.bool,
    isUnread:T.bool,
    selected: T.bool,
    showActions: T.bool,
    showTags: T.bool,
    /*
     *  The message sended by current user which can edit
     */
    canEdit: T.bool,
    onClick: T.func,
    onFileClick: T.func,
    onTagClick: T.func,
    message: T.instanceOf(Immutable.Map),
    isEditMode: T.bool
}

MessageRich.defaultProps = {
    isFavorite: false,
    isDuplicated: false,
    isUnread: false,
    selected: false,
    showActions: false,
    showTags: false,
    canEdit: true,
    isEditMode: false
}

export default MessageRich;