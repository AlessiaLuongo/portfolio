import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";
import { sendCustomEmail } from "./Email";
import { useState } from "react";

const Contatti = () => {
  const [details, setDetails] = useState({
    subject: "",
    message: "",
    to_email: "alessialuongoworkspace@gmail.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendCustomEmail(details);
  };

  return (
    <Container id="contatti">
      <Row className="p-5 justify-content-center align-content-center">
        <Col xs={12} md={8} lg={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>La sua email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="email@example.com"
                value={details.subject}
                onChange={(e) =>
                  setDetails({ ...details, subject: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Mi scriva qui</Form.Label>
              <Form.Control
                as="textarea"
                required
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
