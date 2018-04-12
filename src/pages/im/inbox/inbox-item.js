import React from 'react';
import './inbox-item.less';
import Avatar from '../../../moudle/avatar/avatar';
import Icon from '../../../moudle/icon/icon';
import {PropTypes as T} from 'prop-types';
import classNames from 'classnames';
import Immutable from 'immutable';

class InboxItem extends React.Component{
	render(){

		const inboxItemClass = classNames('inbox-item', {
			'active': this.props.isActive,
			'pinned': this.props.isPinned,
			'selected': this.props.isSelected
		  });
		 
		return (
			<div className = {inboxItemClass}>
				<Avatar backgroundColor='white'
						shape ='round'
						size = 'small'
						className = 'no-avatar'
				/>
				<div className = 'body'>
					<div id = 'inbox-item-cap' className = 'inbox-item-cap flex-horiz flex-vcenter' >
						<div id = 'title' className = 'title text-overflow flex-fill'>
						    QTeam
						</div>
						<div id = 'tag' className = ''>
							<Icon size={16}
							      name = 'mute'  
							/>
						</div>
					</div>
					<div id = 'info' className = 'inbox-item-info flex-horiz flex-vcenter'>
						<div id = 'text' className = 'text text-overflow flex-fill'>
						     感觉字体小了不少啊哈哈哈啊哈哈 
						</div>
					</div>
				</div>
			</div>
		)
	}
}

InboxItem.protoType = {
	isFake:	T.bool,
	isMute: T.bool,
	isActive: T.bool,
	isPinned: T.bool,
	isSelected: T.bool,
	isRemovable: T.bool,
	isClearingUnread: T.bool,
	onClick: T.func,
	onRemove: T.func,
	unreadNum: T.number,
	notification: T.instanceOf(Immutable.Map).isRequired
}

InboxItem.defaultProps = {
	isFake: false,
	isMute: false,
	isActive: false,
	isPinned: false,
	isSelected: false,
	isRemovable: false,
	onClick : () => {},
	onRemove: () => {}
}
export default InboxItem;