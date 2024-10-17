import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Fundamentos</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Backend" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/backend/empresas">
                               Empresas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/empresas">Empresas</Nav.Link>
                        <Nav.Link href="/aeroportos">Aeroportos</Nav.Link>
                        <Nav.Link href="/voos">Voos</Nav.Link>
                        <Nav.Link href="/passagens">Passagens</Nav.Link>
                        <Nav.Link href="/passageiros">Passageiros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container className="my-3">
                {props.children}
            </Container>
        </>
    )
}
