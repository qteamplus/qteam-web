import React from 'react';
import './message-area.less';

class MessageArea extends React.Component {
    render () {
        return (
            <div className = 'message-area flex-space'>
                <div className = 'scroller thin-scroll'>

                </div>
            </div>
        )
    }
}

export default MessageArea;