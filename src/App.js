import { useState } from "react";
import FeedPage from "./Pages/FeedPage";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from "./Providers/UserContext";

function App() {
  const [userToken, setUserToken] = useState(null)

  return (
    <div className="App">
      <UserContext.Provider value={{
        userToken: userToken,
        setUserToken: setUserToken
      }}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<FeedPage/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </div>
  );
}

export default App;
