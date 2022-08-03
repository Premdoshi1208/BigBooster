
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Table user={user} />} />
      <Route path="/form" element={<Form setUser={setUser} user={user} />} />

    </Routes>
  );
}

export default App;
