import style from './App.module.scss';
import { Board } from './components/Board';
import { Modal } from './components/Modal'
function App() {
  return (
    <div className={style.App}>
      <Board />
      <Modal />
    </div>
  );
}

export default App;
