import React from "react";
import Card from "../Card";
import { connect } from "react-redux"

function numberRandom(max, min) {
  const random = parseInt(Math.random() * (max - min)) + min;
  return random;
}

function Sorteio(props) {
  const { min, max } = props

  return (
    <Card title="Sorteio de um numero" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{numberRandom(min, max)}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return{
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Sorteio);
