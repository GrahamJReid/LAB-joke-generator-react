/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import { endpointGenerator } from './endpointGenerator';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbarz">
      <Container>
        <p className="nav-bar-title">Got Jokes?</p>
        <button className="buttonz" type="button" onClick={() => (endpointGenerator('https://v2.jokeapi.dev/joke/Programming?{safemode}&type=twopart'))}>Programming Jokes</button>
        <button className="buttonz" type="button" onClick={() => (endpointGenerator('https://v2.jokeapi.dev/joke/Christmas?safe-mode&type=twopart'))}>Christmas Jokes</button>
        <button className="buttonz" type="button" onClick={() => (endpointGenerator('https://v2.jokeapi.dev/joke/Pun?safe-mode&type=twopart'))}>Pun Jokes</button>
        <button className="buttonz" type="button" onClick={() => (endpointGenerator('https://v2.jokeapi.dev/joke/Spooky?safe-mode&type=twopart'))}>Spooky Jokes</button>
        <button className="buttonz" type="button" onClick={() => (endpointGenerator('https://v2.jokeapi.dev/joke/Misc?safe-mode&type=twopart'))}>Misc Jokes</button>
        <button className="buttonz" type="button" onClick={() => (endpointGenerator('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart'))}>Any Jokes</button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            {/* <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
