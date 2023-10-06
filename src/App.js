import { Route, Routes } from "react-router-dom";
import Buk from "./Buk";
import Games from "./Games";
import Cashback from "./Cashback";
import Blog from "./Blog";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Blog />
          </>
        }
      />
      <Route path="/cashback" element={<Cashback />} />
      <Route path="/gry_i_ankiety" element={<Games />} />
      <Route path="/bukmacherzy" element={<Buk />} />
    </Routes>
  );
}

export default App;
