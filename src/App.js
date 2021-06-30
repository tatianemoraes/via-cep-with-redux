import Home from './pages/Home/index';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={ store }>
      <Home />
    </Provider>
  );
}

export default App;
