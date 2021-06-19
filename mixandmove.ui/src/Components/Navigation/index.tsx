import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Auth from '../../Components/Auth';
import { User } from '../../Helpers/Interfaces/UserInterfaces';

type NavProps = {
  user: User | null;
};

const Navigation = ({ user }: NavProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MIX + MOVE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            { user &&
              <NavItem>
                <NavLink href="/Profile">Profile</NavLink>
              </NavItem>
            }
            <Auth user={user} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;