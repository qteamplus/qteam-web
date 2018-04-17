import React from 'react';
import MessageRich from './message-rich';

class MessageTimeline extends React.Component {
    render () {
        return (
            <div className = 'message-timeline'>
                <MessageRich/>
            </div>
        )
    }
}

export default MessageTimeline;