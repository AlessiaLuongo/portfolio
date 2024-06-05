import { Col, Container, Row } from "react-bootstrap";

const Profilo = () => {
  return (
    <Container id="profilo">
      <Row className="my-3">
        <Col>
          <h1 className="text-center">JUNIOR FULL STACK DEVELOPER</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around align-items-center m-2 g-5">
        <Col xs={12} md={12} lg={5}>
          <div className="m-3 ">
            <img
              src="/public/Screenshot 2024-04-23 163105.png"
              className="rounded-circle"
              alt="profile-picture"
              width="100%"
            />
          </div>
        </Col>
        <Col xs={12} md={12} lg={7} className="text-center text-lg-end">
          <p>Salve, sono Alessia Luongo e ho 29 anni. </p>
          <p>
            Fin da piccola sono rimasta affascinata dall&#39;informatica e dal
            potere della tecnologia.
          </p>
          <p>
            Appena ho avuto l&#39;occasione ho deciso di intraprendere la mia
            strada e di concludere con successo il corso Full Stack presso
            EPICODE.
          </p>
          <p>
            Di natura sono una persona molto attiva e affidabile, queste e altre
            softskills mi hanno portato a lavorare in aziende in cui ricoprivo
            ruoli di una certa responsabilità.
          </p>
          <p>Sono bilingue italiano/tedesco e conosco bene l&#39;inglese.</p>
          <p>
            Mi piace imparare cose nuove e cerco di migliorare me stessa ogni
            giorno.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profilo;
