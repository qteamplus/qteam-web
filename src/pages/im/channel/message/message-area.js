import React from 'react';
import './message-area.less';
import MessageTimeline from './message-timeline';

class MessageArea extends React.Component {
    render () {
        return (
            <div className = 'message-area flex-space'>
                <div className = 'scroller thin-scroll'>
                    <MessageTimeline/>
                    <MessageTimeline/>
                    <MessageTimeline/>
                </div>
            </div>
        )
    }
}

export default MessageArea;