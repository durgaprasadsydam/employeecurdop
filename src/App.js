
import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from './components/Footer';
import Routing from './components/Routing';

function App() {
  return (
    <div className='App'>
      <Header />
       <Routing />
      <Footer />
    </div>
  );
}

export default App;
