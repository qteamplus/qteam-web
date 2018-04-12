import React from 'react';
import './index.less';
import Header from './Header';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
	return (
		<div className = "app">
			<Header location = {location} />
			<div className = "content">
				<div className = "main">
					  {children}
				</div>
			</div>
		</div>
	);
}

export default withRouter(Layout);
