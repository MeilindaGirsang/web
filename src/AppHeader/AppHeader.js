import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon, Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import Logo from "./Labb.jpg";

class AppHeader extends Component {
  render() {
    return (
      <Menu inverted color="blue" stackable={false} fixed="top">
        {this.props.loggedIn && (
          <Menu.Item onClick={this.props.toggleSidebar}>
            <Icon name="content" />
          </Menu.Item>
        )}
        <Menu.Item name="app" as={Link} to="/">

          <img src={Logo} alt="Labb logo" height="50px" width="50px" />
          Labb Pega DXAPI Adapter
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>v1.0.0</Menu.Item>
          {!this.props.loggedIn && (
            <Menu.Item
              name="login"
              as={Link}
              to="/login"
              active={this.props.location.pathname === "/login"}
            >
              {this.props.loggedIn ? "Logout" : "Login"}
            </Menu.Item>
          )}
          {this.props.loggedIn &&
            this.props.userData && (
              <Dropdown item text={this.props.userData.name}>
                <Dropdown.Menu>
                  <Dropdown.Item text="Logout" as={Link} to="/login" />
                </Dropdown.Menu>
              </Dropdown>
            )}
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

const connectedHeader = withRouter(connect(mapStateToProps)(AppHeader));
export { connectedHeader as AppHeader };
