// import logo from './logo.svg';
import './App.css';
import Feed from './Feedback';
import Home from './Home';
import Menu from './Menu';
import Nav from './Navbar';
// import Mymap from './Mymap';

function App() {
  const title = 'Clinc'
  const link = "https://www.google.com"
  return (
    <div className="App">
      <Nav />
      <Home />
      <Menu /> 
      <Feed />
      
    </div>
  );
}

export default App;
