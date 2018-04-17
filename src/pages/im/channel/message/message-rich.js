import React from 'react';
import './message-rich.less';
import UserAlias from '../../../user/user-alias';

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
                    </div>
                    <div className = 'body flex-vend flex-horiz'>
                         这是一条普通消息
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageRich;