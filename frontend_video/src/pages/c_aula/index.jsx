import { useContext, useState } from 'react';
import usercontext from '../../context/Context';
import { MeetingProvider, MeetingConsumer } from '@videosdk.live/react-sdk';
import { MeetingView } from '../d_codigos';
import { Navigate } from 'react-router-dom';

function Aula() {
  // Token de autenticação que usaremos para gerar uma reunião e conectar-se a ela
  const authToken = process.env.REACT_APP_TOKEN_VIDEO;

  const { salaReuniao, user, setSalaReuniao } = useContext(usercontext);
  const [redirect, setRedirect] = useState(false);

  const onMeetingLeave = () => {
    setSalaReuniao(null);
    setRedirect(true);
  };

  return (
    <>
      {redirect && <Navigate to="/" />}
      <div className="video">
        <h1>{`Bem vindo ${user}`}</h1>
        <br />
        <p>{`O código da sua aula é: ${salaReuniao}`}</p>
        <br />
        <br />
        <MeetingProvider
          config={{
            meetingId: salaReuniao,
            micEnabled: true,
            webcamEnabled: true,
            name: user,
          }}
          token={authToken}
        >
          <MeetingConsumer>
            {() => (
              <MeetingView
                meetingId={salaReuniao}
                onMeetingLeave={onMeetingLeave}
              />
            )}
          </MeetingConsumer>
        </MeetingProvider>
      </div>
    </>
  );
}

export default Aula;
