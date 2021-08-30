import "./index.css";
import React from "react";
import Card from "../Card";
import { connect } from "react-redux";
import {
  alterarNumeroMaximo,
  alterarNumeroMinino,
} from "../../store/actions/numeros";

function Interval(props) {
  const { min, max } = props;
  return (
    <Card title="Intervalo de numeros" red>
      <div className="Interval">
        <span>
          <strong>Mínimo: </strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      //action creator -> action
      const action = alterarNumeroMinino(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
