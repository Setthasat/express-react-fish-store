import { Routes, Route } from "react-router-dom";

import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Fish from "./pages/Fish";
import Login from "./pages/Login";
import CreateFish from "./pages/CreateFish";

function App() {
  return (
    <Routes>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateFish />} />
          <Route path="login" element={<Login />} />
          <Route path="fish/:fishId" element={<Fish />} />
          <Route path="*" element={<NoPage />} />
    </Routes>
  )
}

export default App
