import React from "react";
import exemplopagina from "../exemplopagina.png";

class Exemplo extends React.Component {
  render() {
    return (
      <div>
        <div className="hero text-center" id="exemplo">
          <h1 className="text-light">Exemplo de cálculo de rentabilidade</h1>
          <h2 className="text-muted">
            Acessando o link acima, esta tela será mostrada:
          </h2>
        </div>
        <img
          className="img-fluid pt-5 rounded mx-auto d-block col-md-9"
          src={exemplopagina}
          alt="exemplopagina"
        ></img>

        <div className="col text-justify pt-3">
          <p>
            O campo hashing power deve ser preenchido com o rendimento da
            máquina.
          </p>
        </div>

        <div className="col text-justify">
          <p>
            Power consumption (w) deve ser preenchido com o consumo em watts da
            máquina.
          </p>
        </div>
        <div className="col text-justify">
          <p>Cost per Kwh($) indica o valor do Kwh da operação.</p>
        </div>
        <div className="col text-justify">
          <p>Pool fee(%) é a taxa do pool em que trabalhamos.</p>
        </div>
        <div className="col text-justify">
          <p>
            A tabela a direita mostra o total estimado minerado por dia, semana,
            mês e ano. O campo profit representa qual o valor recebido pelo
            período, já deduzido os custos de energia e pool. Para saber o
            resultado do período, é necessário deduzir ainda os custos
            administartivos da empresa, indicados na tabela acima.
          </p>
        </div>
        <div className="col text-justify pb-5">
          <p>
            Na data do exemplo, a máquina S19Pro renderia 206USD brutos no mês.
            Porém, deduzindo as taxas administrativas (19%) o líquido seria de
            166.86USD.
          </p>
        </div>
      </div>
    );
  }
}

export default Exemplo;
