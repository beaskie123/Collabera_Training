import './App.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './screen/Login';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import ContactScreen from './screen/ContactScreen';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
      <Navbar className='nav-container'>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand >STORE</Navbar.Brand>
          </LinkContainer>
          <Nav className="nav">
            <Link to='/Product'>Product</Link>
            <Link to='/Contact'>Contact Us</Link>
            <Link to='/Signin'>Login</Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/Product' element={<ProductScreen/>} />
            <Route path='/Contact' element={<ContactScreen/>} />
            <Route path='/Signin' element={<Login/>} />
          </Routes>
        </Container>
      </main>
    </div>
    </BrowserRouter>
  )
}

