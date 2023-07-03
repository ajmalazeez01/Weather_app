import { BrowserRouter, Route, Routes } from "react-router-dom";
import WetherAppRoutes from "./routes/WetherApp/WetherAppRoutes";

function App() {
  return (
    <div
    style={{ backgroundImage: `url(assets/images/joy-stamp-pGQbWXBC1dA-unsplash.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  }} 
    className="App bg-slate-900 font-mono ">
<BrowserRouter>
        <Routes>
        <Route path="/*" element={<WetherAppRoutes />} />
        </Routes>
</BrowserRouter>
              </div>
  );
}

export default App;
