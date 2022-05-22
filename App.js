import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom';
import Mypage from './pages/mypage/mypage.component';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/student/:usn' element={<Mypage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
