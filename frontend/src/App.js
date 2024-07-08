import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import AddStaff from './AddStaff';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import AllStaff from './components/AllStaff';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/add" exact Component={AddStaff} />
      <Route path="/" exact Component={AllStaff} />
      </Routes>
    </div>
    </Router>
  )
} 

export default App;
