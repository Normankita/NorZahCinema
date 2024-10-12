import './App.css';
import { Footer, Header } from './components';
import AllRoutes from './routes/AllRoutes';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div className="App dark:bg-slate-700">
      <Header/>
        <AllRoutes/>
    <ScrollToTop smooth />

      <Footer/>
    </div>
  );
}

export default App;
