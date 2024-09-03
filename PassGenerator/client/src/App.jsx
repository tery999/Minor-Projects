import { BrowserRouter, Routes, Route } from "react-router-dom";
import PassGenerator from "./PassGenerator";
import { Home } from "./Home";
import { Header } from "./Header";

function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Generate" element={<PassGenerator />} />
      </Routes>
    </BrowserRouter>

  )

}

export default App
