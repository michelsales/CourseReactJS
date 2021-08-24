import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="jose" idade={20} nerd={true} />
      <DiretaFilho nome="joao" idade={15} nerd={false} />
    </div>
  );
};
