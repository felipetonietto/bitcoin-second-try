import React from "react";

class Rentabilidade extends React.Component {
  render() {
    return (
      <>
        <div className="hero text-center" id="rentabilidade">
          <h1 className="text-light">Rentabilidade</h1>
          <h2 className="text-muted">
            de nossa operação e equipamentos disponíveis
          </h2>
        </div>

        <div className="col text-justify mt-4 mb-5">
          <p>
            A rentabilidade da atividade da mineração depende da eficiência do
            equipamento sendo usado, o quanto ele gera de potência computacional
            na tentativa de solucionar o problema – também chamado de hash rate
            – e de alguns fatores de mercado, como o preço do bitcoin, a
            concorrência entre os mineradores (que é calculada a partir da
            somatória da potência total competindo), a dificuldade da mineração
            e o custo elétrico e operacional. Fatores como hash rate do
            equipamento e preço do bitcoin têm impacto diretamente proporcional
            à remuneração da atividade, ou seja, quanto maior a potência e
            quanto maior o preço, maior a rentabilidade. Tendo impacto
            inversamente proporcionais na atividade estão o consumo do
            equipamento, concorrência da rede, dificuldade do problema, custo
            elétrico e operacional, ou seja, quanto maiores forem esses fatores,
            menos rentável será a atividade.
          </p>
        </div>
      </>
    );
  }
}

export default Rentabilidade;
