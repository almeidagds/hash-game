import style from './App.module.scss';
import { Board } from './components/Board';
import { Modal } from './components/Modal'
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <div className={style.App}>
      <Board />
      <Modal id={uuidv4()}
             title="And the winner is..."
             body="Lorem ipsum testando um corpo qualquer aqui nesse espaço." />
    </div>
  );
}

export default App;
