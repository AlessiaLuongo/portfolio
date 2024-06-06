import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";
import { sendCustomEmail } from "./Email";
import { useEffect, useRef, useState } from "react";

const Contatti = ({ setPage }) => {
  const contatti = useRef(null);
  const [isVisible, setIsVisibile] = useState(false);

  const handleScroll = () => {
    const element = contatti.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setIsVisibile(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setPage("Contatti");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const [details, setDetails] = useState({
    subject: "",
    message: "",
    to_email: "alessialuongoworkspace@gmail.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendCustomEmail(details);

    setDetails({
      subject: "",
      message: "",
      to_email: "alessialuongoworkspace@gmail.com",
    });
  };

  return (
    <Container id="contatti" ref={contatti}>
      <Row className="navbar text-center">
        <Col className="my-3">Come contattarmi:</Col>
        <Col xs={12} md={12} lg={12} className="my-2">
          <a
            href="https://www.linkedin.com/in/alessia-luongo-b61832305/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <i className="bi bi-linkedin"> Alessia Luongo</i>
          </a>
        </Col>

        <Col xs={12} md={12} lg={12} className="mb-3">
          <i className="bi bi-envelope-at"> alessialuongoworkspace@gmail.com</i>
        </Col>
        <Col xs={12} md={12} lg={12} className="mt-2">
          Oppure direttamente attraverso questo Form:
        </Col>
      </Row>
      <Row className="p-5 justify-content-center align-content-center">
        <Col xs={12} md={8} lg={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="subject">
              <Form.Control
                type="email"
                required
                placeholder="Inserisca la sua mail"
                value={details.subject}
                onChange={(e) =>
                  setDetails({ ...details, subject: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                required
                placeholder="..."
                rows={3}
                value={details.message}
                onChange={(e) =>
                  setDetails({ ...details, message: e.target.value })
                }
              />
            </Form.Group>
            <Button
              type="submit"
              disabled={!details.subject || !details.message}
              variant="outline-light"
            >
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Contatti;
