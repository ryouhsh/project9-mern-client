import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home-component";
import Register from "./components/register-component";
import Login from "./components/login-component";
import Profile from "./components/profile-component";
import Course from "./components/course-component";
import PostCourse from "./components/postCourse-component";
import Enroll from "./components/enroll-component";
import AuthService from "./services/auth.service";

function App() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        >
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route
            path="login"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
          <Route
            path="profile"
            element={
              <Profile
                currentUser={currentUser}
                setCurentUser={setCurrentUser}
              />
            }
          ></Route>
          <Route
            path="course"
            element={
              <Course
                currentUser={currentUser}
                setCurentUser={setCurrentUser}
              />
            }
          ></Route>
          <Route
            path="postCourse"
            element={
              <PostCourse
                currentUser={currentUser}
                setCurentUser={setCurrentUser}
              />
            }
          ></Route>
          <Route
            path="enroll"
            element={
              <Enroll
                currentUser={currentUser}
                setCurentUser={setCurrentUser}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
