import './App.css';
import {BrowseRouter, Routes, Route} from 'react-router-dom';
import $ from 'react-jquery-plugin'
import Home from "./components/Home";

function App(){
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' Component={Home}/>
      </Routes>
    </BrowserRouter>
  )
}
