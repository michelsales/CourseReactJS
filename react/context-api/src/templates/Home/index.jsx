import { useCounterContext } from '../../contexts/CounterContext/index';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>ois</h1>
    </div>
  );
};
