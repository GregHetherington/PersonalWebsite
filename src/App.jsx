import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip } from 'reactstrap';
import './style.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    
    this.state = {
      isOpen: false,
      tooltipOpen: false
    };
  }
  toggleNavBar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Greg Hetherington</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="TooltipExample" href="/about">About</NavLink>
              </NavItem>
              <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleTooltip}>
                Learn more about me!
              </Tooltip>
              <NavItem>
                <NavLink href="https://github.com/GregHetherington">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    LinkedIn
                  </DropdownItem>
                  <DropdownItem>
                    Email
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <BrowserRouter>
            <Routes />
        </BrowserRouter>

      </div>

    );
  }
}
