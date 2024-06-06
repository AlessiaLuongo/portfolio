import { useState } from "react";
import { Card, CardText, Col } from "react-bootstrap";

const HelloWorld = () => {
  const [frontSide, setFrontSide] = useState(true);

  const handleCardSide = () => {
    setFrontSide(!frontSide);
  };

  return (
    <Col
      xs={12}
      md={10}
      lg={10}
      className="text-center"
      onClick={handleCardSide}
    >
      <Card id="project-card">
        <Card.Body className="card-body d-flex justify-content-center">
          {frontSide === true ? (
            <div className="project-div">
              <Card.Img
                variant="top"
                src="/Screenshot 2024-05-31 112828.png"
                height="100%"
              />
            </div>
          ) : (
            <div className="p-5 back-side">
              <Card.Title className="mb-5">
                L&#39;ultimo progetto che ho realizzato è il Capstone.
              </Card.Title>
              <Card.Text>
                Questa Web App creata con Vite si chiama Hello World e ha come
                obiettivo di promuovere il territorio e dare modo alle persone
                di condividere e conoscere attività e luoghi, che possono essere
                sia outdoor che indoor.
              </Card.Text>
              <CardText>
                Di seguito si troverà il link che porterà alla repository del
                Backend dove si troverà anche il link per la repository del
                Frontend.
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
              <CardText className="my-4">
                Ho ancora tantissime idee da inserire all&#39;interno di questo
                progetto, quindi stay tuned!
              </CardText>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
export default HelloWorld;
