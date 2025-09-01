import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/pages/Home";
import ApplicationForm from "./component/ApplicationForm";
import Main from "./Admin/main";
import Application from "./Admin/CourseData/application";
import ApplicationAdmission from "./Admin/CourseData/applicationAdmission";
import UPSC from "./component/upsc";
import About from "./component/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online-application" element={<ApplicationForm />} />
        <Route path="/admin" element={<Main />} />
        <Route path="/application" element={<Application />} />
        <Route path="/application-detail/:id" element={<ApplicationAdmission/>}/>
        <Route path="/UPSC" element={<UPSC/>}/>
        <Route path="/about" element={<About/>}/>


      </Routes>
    </>
  );
}

export default App;
