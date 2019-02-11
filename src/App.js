import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Menu from './components/Menu';
import List from './components/List';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fireMeUp, getUnreadEmails } from 'rdx/actions/App';

const styles = theme => ({
	contentWrapper: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	menu: {
		width: '250px',
		height: '100%',
		float: 'left'
	},
	list: {
		float: 'left',
		width: 'calc(100% - 250px)'
	}
})

class App extends Component {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(fireMeUp())
		dispatch(getUnreadEmails())
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar unreadEmails={this.props.app.unreadEmails} />
				<div className={classes.contentWrapper}>
					<Menu className={classes.menu} />
					<List className={classes.list} />
				</div>
			</div>
		);
	}
}

export default connect((state) => state)(withStyles(styles)(App));