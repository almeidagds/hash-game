import style from './App.module.scss';

function App() {
  return (
    <div className="App">
        <div className={style.board}>
          <ul>
            <li className={style.case}>
              <div className={style.circle}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.cross}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.circle}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.cross}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.cross}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.circle}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.cross}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.circle}>
              </div>
            </li>
            <li className={style.case}>
              <div className={style.circle}>
              </div>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default App;
