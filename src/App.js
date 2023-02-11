import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiteNavbar from './components/navbar/Navbar';
import Content from './components/main-content/Content';

function App() {
  return (
    <div className="app">
     <SiteNavbar></SiteNavbar>
     <Content></Content>
    </div>
  );
}

export default App;
