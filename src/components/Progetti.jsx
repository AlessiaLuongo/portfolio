import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Progetti = () => {
  return (
    <Container id="progetti">
      <Row className="p-5 justify-content-center align-content-center">
        <Col xs={12} md={10} lg={10} className="text-center">
          <p>
            Durante il percorso con Epicode ho avuto modo di lavorare a progetti
            reali sia in maniera individuale che in gruppo.
          </p>
          <p>L&#39;ultimo progetto che ho realizzato è il Capstone.</p>
          <p>
            Questa Web App creata con Vite si chiama Hello World e ha come
            obiettivo di promuovere il territorio e dare modo alle persone di
            condividere e conoscere attività e luoghi, che possono essere sia
            outdoor che indoor.
          </p>
          <p>
            Di seguito si troverà il link che porterà alla repository del
            Backend dove si troverà anche il link per la repository del
            Frontend.
          </p>

          <a
            href="https://github.com/AlessiaLuongo/Capstone-Backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"> HelloWorld</i>
          </a>
          <p className="my-4">
            Ho ancora tantissime idee da inserire all&#39;interno di questo
            progetto, quindi stay tuned!
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Progetti;
