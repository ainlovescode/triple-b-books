import './App.css';

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import EditorPick from './components/EditorPick/EditorPick';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/editors-picks" element={<EditorPick />} />
        </Routes>
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
