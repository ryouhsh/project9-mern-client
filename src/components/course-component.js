import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const DirectToLogin = () => {
    navigate("/login");
  };
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    let userID;
    if (currentUser) {
      userID = currentUser.user._id;
      if (currentUser.user.role === "instructor") {
        CourseService.getInstructorCourses(userID)
          .then((data) => {
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role === "student") {
        CourseService.getEnrolledCourses(userID)
          .then((data) => {
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, []);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>
            To access the course page, please log in to your account. If you
            don't have an account, you can easily create one. Happy learning!
          </p>
          <button className="btn btn-primary " onClick={DirectToLogin}>
            Return to Login
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <h1>Welcome to Instructor Course Page!</h1>
        </div>
      )}

      {currentUser && currentUser.user.role === "student" && (
        <div>
          <h1>Welcome to Student Course Page!</h1>
        </div>
      )}

      {currentUser && courseData && courseData !== 0 && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {courseData.map((course) => {
            return (
              <div className="card" style={{ width: "18rem", margin: "1rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p style={{ margin: "0.5rem 0rem" }} className="card-text">
                    {course.description}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    {course.students.length} students
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>NT$ {course.price}</p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    Created by {course.instructor.username}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
