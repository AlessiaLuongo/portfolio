import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HelloWorld from "./HelloWorld";
import { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";

const Progetti = ({ setPage }) => {
  const progetti = useRef(null);
  const [isVisible, setIsVisibile] = useState(false);

  const handleScroll = () => {
    const element = progetti.current;

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
      setPage("Progetti");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);
  return (
    <Container id="progetti" className="mb-5 py-4">
      <Row className="py-5 justify-content-center align-content-center">
        <p className="text-center m-5" ref={progetti}>
          Durante il percorso con Epicode ho avuto modo di lavorare a progetti
          reali sia in maniera individuale che in gruppo.
        </p>
        <Col
          xs={12}
          md={12}
          lg={12}
          className="d-flex justify-content-center align-content-center"
        >
          <HelloWorld />
        </Col>
      </Row>
    </Container>
  );
};
export default Progetti;
