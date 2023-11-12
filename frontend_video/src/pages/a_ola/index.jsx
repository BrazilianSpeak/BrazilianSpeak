import { useContext, useState } from 'react';
import Loading from '../../components/Loading';
import usercontext from '../../context/Context';
import { createMeeting } from '../../services/API';
import { Navigate } from 'react-router-dom';

function Ola() {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [sala, setSala] = useState();
  const { setSalaReuniao } = useContext(usercontext);

  const buscandoReuniao = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (sala && sala.length > 4) {
      setSalaReuniao(sala);
    } else {
      const id = await createMeeting();
      setSalaReuniao(id);
    }

    setRedirect(true);
    setLoading(false);
  };

  return (
    <>
      {redirect && <Navigate to="/identificando" />}
      {loading ? (
        <Loading informacao="Otimo! \n Estamos organizando tudo para você!" />
      ) : (
        <div className="video">
          <h1>Bem vindo!</h1>
          <br />
          <h3>Pronto(a) para começar?</h3>
          <br />
          <button onClick={(event) => buscandoReuniao(event)}>
            PRONTOOOOOOOO!!!
          </button>
          <br />
          <br />
          <input
            placeholder="Código da reunião"
            type="text"
            value={sala}
            onChange={({ target }) => setSala(target.value)}
          />
        </div>
      )}
    </>
  );
}

export default Ola;
