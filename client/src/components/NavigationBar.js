import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SEARCH_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/search" style={{alignContent: "center"}}>GitHubFiles</Navbar.Brand>
          <Nav className="ml-auto">
            <Button href="/search">На главную</Button>
            <Button href="/projects">Загруженные проекты</Button>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavigationBar