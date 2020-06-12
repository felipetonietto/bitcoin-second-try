import React from "react";
import Introducao from "./Components/Introducao";
import Calculo from "./Components/Calculo";
import Rentabilidade from "./Components/Rentabilidade";
import Investimento from "./Components/Investimento";
import Exemplo from "./Components/Exemplo";
import Maquina from "./Components/Maquina";
import Mineracao from "./Components/Mineracao";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <div className="d-flex flex-column">
          <NavBar />
          <Introducao />
          <Mineracao />
          <Calculo />
          <Rentabilidade />
          <Investimento />
          <Exemplo />
          <Maquina />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
