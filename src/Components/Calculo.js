import React from "react";

class Calculo extends React.Component {
  render() {
    return (
      <>
        <div className="hero text-center" id="calculo">
          <h1 className="text-light">Cálculo</h1>
          <h2 className="text-muted">da renda da mineração</h2>
        </div>

        <div className="col text-justify mt-4 mb-4">
          <p>
            Os seguintes parâmetros devem ser levados em conta para construir o
            cálculo de rentabilidade de nossa operação:
          </p>
        </div>
        <div className="bd">
          <table class="table table-sm table-striped table-dark table-bordered table-hover table-responsive{-lg}">
            <thead>
              <tr>
                <th scope="col">KWh</th>
                <th scope="col">0.035 USD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Taxas administrativas</td>
                <td>19%</td>
              </tr>
              <tr>
                <td>Taxa pool</td>
                <td>1.5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col text-justify mt-4 mb-4">
          <p>
            Um Killowatt hora (Kwh) representa um equipamento de 1000 watts
            ligado durante uma hora. O custo é auferido uma vez ao mês na conta
            de energia.
          </p>
        </div>
      </>
    );
  }
}

export default Calculo;
