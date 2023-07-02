import { BrowserRouter, Route, Routes } from "react-router-dom";
import WetherAppRoutes from "./routes/WetherApp/WetherAppRoutes";

function App() {
  return (
    <div className="App bg-slate-900 font-mono ">
<BrowserRouter>
        <Routes>
        <Route path="/*" element={<WetherAppRoutes />} />
        </Routes>
</BrowserRouter>
              </div>
  );
}

export default App;
