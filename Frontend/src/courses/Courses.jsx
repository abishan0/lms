import Footer from "../Components/Footer";
import Course from "../Components/Course";
import Navbar from "../components/Navbar";
function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
            <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
