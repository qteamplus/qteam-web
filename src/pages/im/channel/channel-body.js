import React from 'react';
import './channel-body.less';
import MessageArea from './message/message-area';
import MessageEditor from './message/message-editor';

class ChannelBody extends React.Component {
    render () {
        return (
            <div className = 'channel-body flex-space flex-vert' >
                <MessageArea/>
                <MessageEditor/>
            </div>
        )
    }
}

export default ChannelBody;