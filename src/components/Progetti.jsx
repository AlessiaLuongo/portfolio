import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HelloWorld from "./HelloWorld";
import { useEffect, useRef, useState } from "react";
import WeatherApp from "./WeatherApp";
import Memory from "./Memory";

const Progetti = ({ setPage }) => {
  const progetti = useRef(null);
  const [isVisible, setIsVisibile] = useState(false);

  const handleScroll = () => {
    const element = progetti.current;

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
      setPage("Progetti");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);
  return (
    <Container id="progetti" className="mb-5 py-4">
      <Row className="py-5">
        <p className="text-center" ref={progetti}>
          Durante le Academy ho avuto modo di lavorare a progetti reali sia in
          maniera individuale che in gruppo.
        </p>
      </Row>
      <Row className="justify-content-center align-content-center g-5">
        <HelloWorld />
        <WeatherApp />
        <Memory />
      </Row>
    </Container>
  );
};
export default Progetti;
