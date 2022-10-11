import style from './App.module.scss';
import AppRouter from './routes';

function App() {
  return (
    <div className={style.App}>
      <AppRouter />
    </div>
  );
}

export default App;
