import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = ({ page }) => {
  const scrollToSection = (sectionId) => {
    if (sectionId === "Profilo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
            <p
              href="#profilo"
              className={page == "Profilo" ? "selected" : "notSelected"}
              onClick={() => {
                scrollToSection("profilo");
              }}
              id="navbar-p"
            >
              Profilo
            </p>
            <p
              href="#competenze"
              className={page == "Competenze" ? "selected" : "notSelected"}
              onClick={() => {
                scrollToSection("competenze");
              }}
              id="navbar-p"
            >
              Competenze
            </p>
            <p
              href="#progetti"
              className={page == "Progetti" ? "selected" : "notSelected"}
              onClick={() => {
                scrollToSection("progetti");
              }}
              id="navbar-p"
            >
              Progetti
            </p>
            <p
              href="#contatti"
              className={page == "Contatti" ? "selected" : "notSelected"}
              onClick={() => {
                scrollToSection("contatti");
              }}
              id="navbar-p"
            >
              Contatti
            </p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
