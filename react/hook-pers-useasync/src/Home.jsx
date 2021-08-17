import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction, shouldRun) => {
    const [state, setState] = useState({
        result: null,
        error: null,
        status: 'idle'
    });
    
    const run = useCallback(() => {
        console.log('Effect', new Date().toLocaleString());
        
        setState({
            result: null,
            error: null,
            status: 'pending'
        });

        
        return asyncFunction()
        .then(response => {
            setState({
                result: response,
                error: null,
                status: 'settled'
            });
        })
        .catch((err) => {
            setState({
                result: null,
                error: err,
                status: 'error',
            });
        })
    },[asyncFunction]);

    useEffect(() =>{
        if(shouldRun){
            run();
        }
    },[run, shouldRun])

    return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    return json;
};


export const Home = () => {
    const [reFetchData, result, error, status] = useAsync(fetchData, true);
    
    useEffect(() => {
        setTimeout(() => {
            reFetchData();
        }, 2000)
    }, [reFetchData])
    
    function handleClick() {
        reFetchData();
    }

    if(status === 'idle'){
        return <pre>idle: Nada executando</pre>
    }
    if(status === 'pending'){
        return <pre>pending: Loading...</pre>
    }
    if(status === 'error'){
        return <pre>error: {error.message}</pre>
    }
    if(status === 'settled'){
        return <pre onClick={handleClick}>settled: {JSON.stringify(result, null, 2)}</pre>
    }
        return 'IXIII';
}
export default Home;