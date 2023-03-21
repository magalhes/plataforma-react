
import './App.css';
import { Home } from './Pages/Home/Home';
import { Menu } from './Components/Menu/Menu';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Blog } from './Pages/Blog/Blog';
import { Contato } from './Pages/Contato/Contato';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Contato' element={<Contato/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
