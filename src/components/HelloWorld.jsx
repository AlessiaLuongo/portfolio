import { useState } from "react";
import { Button, Card, CardText, Col, Row } from "react-bootstrap";

const HelloWorld = () => {
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
                Questo è il mio progetto Capstone del corso di Epicode.
              </p>
              <p className="ps-3">
                Questa Web App creata con Vite si chiama Hello World e ha come
                obiettivo di promuovere il territorio e dare modo alle persone
                di condividere e conoscere attività e luoghi, che possono essere
                sia outdoor che indoor.
              </p>
            </div>
          </Col>
          <Col xs={12} md={7} lg={7}>
            <Card.Body className="card-body d-flex justify-content-center">
              {frontSide === true ? (
                <div>
                  <Card.Img
                    variant="top"
                    src="/Screenshot 2024-05-31 112828.png"
                    id="card-image"
                  />
                </div>
              ) : (
                <div>
                  <CardText>
                    Di seguito si troverà il link che porterà alla repository
                    del Backend dove si troverà anche il link per la repository
                    del Frontend.
                  </CardText>
                  <CardText>
                    <a
                      href="https://github.com/AlessiaLuongo/Capstone-Backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"> HelloWorld</i>
                    </a>
                  </CardText>
                  <CardText>
                    Ho ancora tantissime idee da inserire all&#39;interno di
                    questo progetto, quindi stay tuned!
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
export default HelloWorld;
