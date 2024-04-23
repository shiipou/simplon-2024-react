import { useState } from "react";
import FeedPage from "./Pages/FeedPage";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  function handleLogin(newUser) {
    setUser(newUser)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedPage user={user}/>} />
          <Route path="/login" element={<Login onLoginSucceed={handleLogin}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
