import style from './App.module.scss';
import { Board } from './components/Board';

function App() {
  return (
    <div className={style.App}>
      <Board />
    </div>
  );
}

export default App;
