import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Router } from 'react-router-dom';
import Routerzip from './router/Routerzip';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
