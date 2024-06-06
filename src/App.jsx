import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profilo from "./components/Profilo";
import Competenze from "./components/Competenze";
import Progetti from "./components/Progetti";
import Contatti from "./components/Contatti";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Profilo");

  return (
    <>
      <MyNavbar page={page} />
      <Profilo setPage={setPage} />
      <Competenze setPage={setPage} />
      <Progetti setPage={setPage} />
      <Contatti setPage={setPage} />
    </>
  );
}

export default App;
