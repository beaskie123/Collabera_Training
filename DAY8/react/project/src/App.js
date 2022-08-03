import {BrowserRouter, Routes, Router, Route, Link} from 'react-router-dom'
import HomeScreen from "./components/HomeScreen";
import Contact from './components/Contact';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Product from './components/Product';

function App () {
    return(
        <BrowserRouter>
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Fenti Beauty</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href={`/Product`}>Product</Nav.Link>
                <Nav.Link href={`/Contact`}>Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
            <main>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/product" element= {<Product />} />
                <Route path="/contact" element= {<Contact />} />
            </Routes>               
                
            </main>
        </div>
        </BrowserRouter>
    )
}

export default App;