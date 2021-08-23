import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default props => {
    return (
        <div>
            <FamiliaMembro  nome="michel" sobrenome={props.sobrenome} />
            <FamiliaMembro  nome="Ronaldo" {...props} />
            <FamiliaMembro nome="Janet" sobrenome="machado" />
        </div>
    );
}