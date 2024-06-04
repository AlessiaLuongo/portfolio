import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Competenze = () => {
  return (
    <Container className=" scroller px-5" id="competenze">
      <Row className="scroller-inner">
        <Col sm={3}>
          <img src="/public/html5.svg" alt="html-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/public/css.svg" alt="css-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/public/javascript.svg" alt="javascript-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/public/react.svg" alt="react-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/public/bootstrap.svg" alt="bootstrap-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/public/sass.svg" alt="sass-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/public/java.svg" alt="java-logo" width={150} />
        </Col>
        <Col sm={3}>
          <img src="/public/spring.svg" alt="spring-logo" width={150} />
        </Col>
      </Row>
    </Container>
  );
};
export default Competenze;
