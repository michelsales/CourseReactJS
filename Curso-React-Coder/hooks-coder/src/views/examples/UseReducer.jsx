import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { reducer, initialState } from "../../store";
import { number_add2, login} from '../../store/actions';

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário...</span>
        )}
        <button
          className="btn"
          onClick={() => login(dispatch, 'joão')}
        >
          Login
        </button>
        <span className="text"></span>
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={ () => number_add2(dispatch) }
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "multiply7" })}
          >
            +7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "divisor25" })}
          >
            /25
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "addYourNumber", payload: 5 })}
          >
              5
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
