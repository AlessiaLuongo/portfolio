import { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Competenze = ({ setPage }) => {
  const competenze = useRef(null);
  const [isVisible, setIsVisibile] = useState(false);

  const handleScroll = () => {
    const element = competenze.current;

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
      setPage("Competenze");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <Container className="navbar scroller px-5 mt-5 " id="competenze">
      <Row className="scroller-inner">
        <Col sm={3} ref={competenze}>
          <img src="/html5.svg" alt="html-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/css.svg" alt="css-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/javascript.svg" alt="javascript-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/typescript.svg" alt="typescript-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/react.svg" alt="react-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/bootstrap.svg" alt="bootstrap-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/sass.svg" alt="sass-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/java.svg" alt="java-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/spring.svg" alt="spring-logo" width={150} />
        </Col>
      </Row>
    </Container>
  );
};
export default Competenze;
