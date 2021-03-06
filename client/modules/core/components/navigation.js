import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    // this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar
          title="TripIdeas"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}><a href='/new-post' >Add Trip</a></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><a href='/' >Show Trips</a></MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default Navigation;
