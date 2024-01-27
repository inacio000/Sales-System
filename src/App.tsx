import { Provider } from 'react-redux';
import store from './store';
import GlobalModal from './shared/components/Modal/GlobalModal/GlobalModal';
import Navigation from './Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <Navigation />
    </Provider>
  );
};

export default App;
