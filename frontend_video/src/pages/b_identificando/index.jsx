import { useContext, useState } from 'react';
import usercontext from '../../context/Context';
import { Navigate } from 'react-router-dom';

function Identificando() {

  const { salaReuniao, setUser } = useContext(usercontext);
  const [redirect, setRedirect] = useState(false);

  const paraAula = (event, user) => {
    event.preventDefault();
    setUser(user)
    setRedirect(true)
  }

  return (
    <>
      {redirect && <Navigate to="/aula" />}
      <div className="video">
        <h1>Você é ... ?</h1>
        <br />
        <button onClick={(event) => paraAula(event, "Aluno")}>Eu sou aluno</button>
        <br />
        <button onClick={(event) => paraAula(event, "professor")}>Eu sou professor</button>
        <br />
        <br />
        <p>{`Código: ${salaReuniao}`}</p>
      </div>
    </>
  );
}

export default Identificando;
