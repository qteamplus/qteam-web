import InboxTable from './inbox/inbox-table';
import './im.less';

export default () => {
    return (
        <div className = 'im-page flex-horiz'>
            <div className = 'im-aside flex-vert'>
                <InboxTable/>
            </div>
            <div className = 'im-main flex-space felx-vert'>
                
            </div>
           
        </div>
    )
}