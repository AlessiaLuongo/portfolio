import { useEffect, useRef, useState } from "react";

import Container from "react-bootstrap/Container";

const Competenze = ({ setPage }) => {
  const competenze = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = competenze.current;

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
      setPage("Competenze");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const logos = [
    { src: "/html5.svg", alt: "html-logo" },
    { src: "/css.svg", alt: "css-logo" },
    { src: "/javascript.svg", alt: "javascript-logo" },
    { src: "/typescript.svg", alt: "typescript-logo" },
    { src: "/react.svg", alt: "react-logo" },
    { src: "/bootstrap.svg", alt: "bootstrap-logo" },
    { src: "/sass.svg", alt: "sass-logo" },
    { src: "/java.svg", alt: "java-logo" },
    { src: "/spring.svg", alt: "spring-logo" },
    { src: "/html5.svg", alt: "html-logo" },
    { src: "/css.svg", alt: "css-logo" },
    { src: "/javascript.svg", alt: "javascript-logo" },
    { src: "/typescript.svg", alt: "typescript-logo" },
    { src: "/react.svg", alt: "react-logo" },
    { src: "/bootstrap.svg", alt: "bootstrap-logo" },
    { src: "/sass.svg", alt: "sass-logo" },
    { src: "/java.svg", alt: "java-logo" },
    { src: "/spring.svg", alt: "spring-logo" },
  ];

  return (
    <Container className="navbar  px-5 mt-5" id="competenze" ref={competenze}>
      <div className="scroller">
        <div className="d-flex scroller-inner">
          {logos.map((logo, index) => (
            <div className="scroller-div" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Competenze;
