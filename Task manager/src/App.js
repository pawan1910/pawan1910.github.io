
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import Edit from './components/Edit';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashBoard/>} />
        <Route exact path="/edit/:id" element={<Edit/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
