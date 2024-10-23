
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import Signup from "./Components/Signup";
import ContactPage from "./Components/Contact";

function App() {
  return (
    <>
    <div className=" dark:text-white dark:bg-slate-900">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="course" element={<Courses />} />
    <Route path="signup" element={<Signup />} />
    <Route path="contact" element={<ContactPage />} />
   </Routes>
    </div>
    </>
  );
}

export default App;
