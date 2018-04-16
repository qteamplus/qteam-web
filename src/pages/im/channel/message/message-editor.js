import React from 'react';
import Textarea from 'react-textarea-autosize';

import './message-editor.less'

class MessageEditor extends React.Component {
    render () {
        return (
            <div className = 'message-editor flex-static'>
                  <Textarea className = 'lite-textbox'/>
            </div>
        )
    }
}

export default MessageEditor;