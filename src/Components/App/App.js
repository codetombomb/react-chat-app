import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';
import io from "socket.io-client"

const newSocket = io(`http://localhost:3001`)


function App() {
  return (
    <div className="App">
      <button onClick={() => {
        newSocket.emit("Oh yea")
      }}>EMIT</button>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
