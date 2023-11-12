import './Loading.css';

// fonte do carregamento:
// https://www.cupcom.com.br/programacao/15-carregadores-de-paginas-animados-apenas-com-css.html

function Loading({ informacao }) {
  return (
    <div className="spinner">
      <div className="ball"></div>
      <p>{informacao}</p>
    </div>
  );
}

export default Loading;
