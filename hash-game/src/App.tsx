import style from './App.module.scss';

function App() {
  return (
    <div className="App">
        <div className={style.board}>
          <ul>
            <li className={style.case}></li>
            <li className={style.case}></li>
            <li className={style.case}></li>
            <li className={style.case}></li>
            <li className={style.case}></li>
            <li className={style.case}></li>
            <li className={style.case}></li>
            <li className={style.case}></li>
            <li className={style.case}></li>
          </ul>
        </div>
    </div>
  );
}

export default App;
