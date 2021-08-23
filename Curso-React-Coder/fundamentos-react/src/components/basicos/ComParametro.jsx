export default function ComParametro(props) {
  return (
    <div>
        <h1>Recebendo parametro: </h1>
      <h2>{props.titulo}</h2>
      <h3>{props.subtitulo}</h3>
      <h3> tem nota: {props.nota}</h3>
    </div>
  );
}
