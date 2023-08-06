import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Info from './pages/ProductInfo';

function App() {
  return (
    <div className="App">
      <div className='background'>
      <Header/>
      <Main/>
      <Info></Info>
      <Footer/>
      </div>
    </div>

  );
}

export default App;
