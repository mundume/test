import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CardLists from './components/CardLists';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
      
      
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/addproduct" element={<CardLists />} />
       </Routes>
     </BrowserRouter>
    
   
  );
}

export default App;
