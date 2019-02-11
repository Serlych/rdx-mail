import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    margin: '10px 27px',
    backgroundColor: theme.palette.background.paper,
  },
  span: {
    marginLeft: '20px'
  }
});

class CheckboxList extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes, className } = this.props;

    return (
        <div className={className}>
            <List className={classes.root}>
                {[0, 1, 2, 3].map(value => (
                <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                    <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    />
                    <ListItemText>
                      <strong>
                        Hardcoded From to {value + 1}
                      </strong>
                      <span className={classes.span}>
                        Hardcoded Subject
                      </span>
                      <span className={classes.span}>
                        Hardcoded preview Hardcoded preview Hardcoded preview Hardcoded preview
                      </span>
                    </ListItemText>
                </ListItem>
                ))}
            </List>
        </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);