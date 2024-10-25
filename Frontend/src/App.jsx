
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import Signup from "./components/Signup";
import ContactPage from "./Components/Contact";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser) // State for user authentication]
  return (
    <>
      <div className="dark:text-white dark:bg-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;