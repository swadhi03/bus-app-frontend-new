import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import AddBus from './components/AddBus';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/add' element={<AddBus/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
