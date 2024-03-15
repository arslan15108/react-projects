import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

function App() {
  return (
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
  );
}

export default App;
