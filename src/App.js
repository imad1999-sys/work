import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import Content from './Component/Content';
import NewItems from './Component/NewItems';
import Footer from './Component/Footer';
import PlayStationPage from './Pages/PlayStationPage';


function App() {
  return (
    /*<div className="App">
      <NavBar></NavBar>
      <Content></Content>
      <NewItems></NewItems>
      <Footer></Footer>
    </div>*/
    <div className="App">
      <PlayStationPage></PlayStationPage>
    </div>
  );
}

export default App;
