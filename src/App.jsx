import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profilo from "./components/Profilo";
import Competenze from "./components/Competenze";
import Progetti from "./components/Progetti";
import Contatti from "./components/Contatti";

function App() {
  return (
    <>
      <MyNavbar />
      <Profilo />
      <Competenze />
      <Progetti />
      <Contatti />
    </>
  );
}

export default App;
