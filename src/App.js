import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import HtmlCss from './Pages/HtmlCss'
import Javascript from './Pages/Javascript'
import Node from './Pages/Node'
import ReactAns from './Pages/ReactAns';
import Question from './Pages/Question';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/questions' element={<Question/>}></Route>
        <Route path='/html-css' element={<HtmlCss/>}></Route>
        <Route path='/javascript' element={<Javascript/>}></Route>
        <Route path='/react' element={<ReactAns/>}></Route>
        <Route path='/node' element={<Node/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
