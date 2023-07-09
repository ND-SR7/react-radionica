import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/HomePage";
import Personal from "./Pages/PersonalPage/PersonalPage";
import Contacts from "./Pages/ContactsPage/ContactsPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/personal" element={<Personal/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
