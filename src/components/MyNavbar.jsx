import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary sticky-top "
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 me-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#profilo">Profilo</Nav.Link>
            <Nav.Link href="#competenze">Competenze</Nav.Link>
            <Nav.Link href="#progetti">Progetti</Nav.Link>
            <Nav.Link href="#contatti">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
