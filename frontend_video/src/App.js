import { Route, Routes } from 'react-router-dom';
import UserContextProvider from './context/Provider';
import Ola from './pages/a_ola';
import Identificando from './pages/b_identificando';
import Aula from './pages/c_aula';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/aula" element={<Aula />} />
        <Route path="/identificando" element={<Identificando />} />
        <Route path="/" element={<Ola />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
