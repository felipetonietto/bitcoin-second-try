import React from "react";

class Investimento extends React.Component {
  render() {
    return (
      <>
        <div className="hero text-center" id="investimento">
          <h1 className="text-light">Investimento</h1>
          <h2 className="text-muted">
            Atualmente, trabalhamos com as seguintes máquinas:
          </h2>
        </div>

        <div className="bd">
          <table class="mb-3 mt-4 table table-striped table-dark table-bordered table-hover table-sm table-responsive{-md}">
            <thead>
              <tr>
                <th scope="col">Fabricante</th>
                <th scope="col">Modelo</th>
                <th scope="col">Rendimento</th>
                <th scope="col">Consumo</th>
                <th scope="col">Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bitmain</td>
                <td>S19Pro</td>
                <td>110THs</td>
                <td>3250(+/-)5%</td>
                <td>2990 USD</td>
              </tr>
              <tr>
                <td>Bitmain</td>
                <td>S19</td>
                <td>95THs</td>
                <td>3250(+/-)5%</td>
                <td>2650 USD</td>
              </tr>
              <tr>
                <td>Whatsminer</td>
                <td>M20S</td>
                <td>68THs</td>
                <td>3260(+/-)10%</td>
                <td>2010 USD</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col text-justify">
          <p>
            Para fazer a conta de rentabilide, recomendamos uma cálculadora de
            rentabilidade que pode ser acessada neste{" "}
            <a
              href="https://www.cryptocompare.com/mining/calculator/btc?HashingPower=56&HashingUnit=TH%2Fs&PowerConsumption=2500&CostPerkWh=0.035&MiningPoolFee=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              link.
            </a>
          </p>
        </div>
        <div className="col text-justify">
          <p>
            Recomendamos que seja feita a conta de rentabilidade no momento da
            visita ao site, pois os resultados sofrem influência de mercado.
          </p>
        </div>
      </>
    );
  }
}

export default Investimento;
