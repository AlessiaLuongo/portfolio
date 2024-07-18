import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Button, CardText } from "react-bootstrap";
import { useState } from "react";

const Memory = () => {
  const [frontSide, setFrontSide] = useState(true);

  const handleCardSide = () => {
    setFrontSide(!frontSide);
  };
  return (
    <Col
      xs={10}
      md={12}
      lg={12}
      className="text-center d-flex flex-row align-items-center"
      id="project-col"
    >
      <Card id="project-card">
        <Row className="text-center d-flex flex-row align-items-center">
          <Col xs={12} md={5} lg={5}>
            <div className="py-5 d-flex flex-column align-items-center">
              <p className="ps-3">
                Questo è un piccolo Memory a tema rock/metal.
              </p>
              <p className="ps-4">
                Non è niente di straordinario, ma è stato un passatempo
                divertente che mi ha aiutato a spezzare la monotonia degli studi
                e sopravvivere alle giornate caldissime.
              </p>
            </div>
          </Col>
          <Col xs={12} md={7} lg={7}>
            <Card.Body className="card-body d-flex justify-content-center">
              {frontSide === true ? (
                <div id="div-pic">
                  <Card.Img variant="top" src="/memory.png" id="card-image" />
                </div>
              ) : (
                <div className="p-5">
                  <CardText>Qui il codice su GitHub</CardText>
                  <CardText>
                    <a
                      href="https://github.com/AlessiaLuongo/Capstone-Backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"> Memory</i>
                    </a>
                  </CardText>
                  <CardText>E qui la versione deployata</CardText>
                  <CardText>
                    <a
                      href="https://metal-memory.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-globe2"> Memory Game</i>
                    </a>
                  </CardText>
                </div>
              )}
            </Card.Body>

            <Button onClick={handleCardSide} id="handle-button">
              <i className="bi bi-arrow-return-right"></i>
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default Memory;
