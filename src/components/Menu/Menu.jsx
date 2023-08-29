import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu(props) {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#" onClick={() => props.setLoading(true)}>Bootstrap Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" onClick={() => props.setLoading(true)}>Home</Nav.Link>
                        <Nav.Link href="#action2" onClick={() => props.setLoading(true)}>Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" onClick={() => props.setLoading(true)}>Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" onClick={() => props.setLoading(true)}>
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5" onClick={() => props.setLoading(true)}>
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled onClick={() => props.setLoading(true)}>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;