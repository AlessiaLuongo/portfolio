import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Profilo = ({ setPage }) => {
  const profilo = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = profilo.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setIsVisible(isVisible);
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
      setPage("Profilo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <Container id="profilo" className="pb-5">
      <Row className="my-3" ref={profilo}>
        <Col>
          <h1 className="text-center">JUNIOR FULL STACK DEVELOPER</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around align-items-center m-2 g-5">
        <Col xs={12} md={12} lg={5}>
          <div className="m-3 ">
            <img
              src="/fotoCV.jpg"
              className="rounded-circle"
              alt="profile-picture"
              width="100%"
            />
          </div>
        </Col>
        <Col xs={12} md={12} lg={7} className="text-center text-lg-end">
          <p>Salve, sono Alessia Luongo e ho 30 anni. </p>
          <p>
            Sono una Junior Full Stack Developer che ha concluso con successo un
            percorso formativo di sei mesi con l&#39;Accademia &#39;Epicode&#39;
            e un&#39;Academy di Java presso Betacom.
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
      <hr className="my-5 " />
    </Container>
  );
};

export default Profilo;
