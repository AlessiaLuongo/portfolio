import { useState } from "react";
import { Button, Card, CardText, Col, Row } from "react-bootstrap";

const WeatherApp = () => {
  const [frontSide, setFrontSide] = useState(true);

  const handleCardSide = () => {
    setFrontSide(!frontSide);
  };
  return (
    <Col
      xs={10}
      md={12}
      lg={12}
      className=" text-center d-flex flex-row align-items-center "
      id="project-col"
    >
      <Card id="project-card">
        <Row className="text-center d-flex flex-row align-items-center ">
          <Col xs={12} md={7} lg={7}>
            <Card.Body className="card-body d-flex justify-content-center ">
              {frontSide === true ? (
                <div id="div-pic">
                  <Card.Img
                    variant="top"
                    src="/weatherapp.png"
                    id="card-image"
                  />
                </div>
              ) : (
                <div className="p-5 ">
                  <CardText>Qui il codice su GitHub</CardText>
                  <CardText>
                    <a
                      href="https://github.com/AlessiaLuongo/Weather-App.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"> Weather App</i>
                    </a>
                  </CardText>
                  <CardText>E qui la versione deployata</CardText>
                  <CardText>
                    <a
                      href="https://weather-app-lovat-mu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-globe2">
                        {" "}
                        WTW What&#39;s the Weather?
                      </i>
                    </a>
                  </CardText>
                </div>
              )}
            </Card.Body>

            <Button onClick={handleCardSide} id="handle-button">
              <i className="bi bi-arrow-return-right"></i>
            </Button>
          </Col>

          <Col xs={12} md={5} lg={5}>
            <div className="py-5 d-flex flex-column align-items-center">
              <p className="pe-3">Una piccola applicazione meteo.</p>
              <p className="pe-3">
                Questo progetto è una piccola weather-app che ho creato per
                ripassare alcuni concetti come potrebbe essere la navigazione
                all&#39;interno di API esterne.
              </p>
              <p className="pe-3">L&#39;API utilizzata è OpenWeatherMap.</p>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default WeatherApp;
