import { Col, Container, Row } from "react-bootstrap";

const Profilo = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">JUNIOR FULL STACK DEVELOPER</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around align-items-center m-5 g-5">
        <Col xs={12} md={7} lg={5}>
          <div className="m-3 ">
            <img
              src="/public/Screenshot 2024-04-23 163105.png"
              className="rounded-circle"
              alt="profile-picture"
              width="100%"
            />
          </div>
        </Col>
        <Col xs={12} md={5} lg={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, at aspernatur! Sint, quod dolorum. Illo eveniet ex
            perspiciatis vitae maiores dolore neque, laborum et ab iste tempora
            pariatur alias magnam!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profilo;
