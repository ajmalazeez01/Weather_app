import React from "react";
import { Route, Routes } from "react-router-dom";

import WetherrAppPages from "../../pages/wetherApp/WetherrAppPages";

function WetherAppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WetherrAppPages />} />
      </Routes>
    </div>
  );
}

export default WetherAppRoutes;
