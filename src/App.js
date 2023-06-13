import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponent';
import AddNewBookComponent from './components/AddNewBookComponent/AddNewBookComponent';
import AllBooksComponent from './components/AllBooksComponent/AllBooksComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>

      <Routes>
        <Route exact path='/' element={<HomeComponent/>}/>
        <Route exact path='/add/new' element={<AddNewBookComponent/>}/>
        <Route exact path='/view' element={<AllBooksComponent/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
