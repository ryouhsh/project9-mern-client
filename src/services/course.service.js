import axios from "axios";
const API_URL = "http://localhost:8080/api/courses";

class CourseService {
  postNewCourse(title, description, price) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL,
      { title, description, price },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  getEnrolledCourses(studentID) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(`${API_URL}/student/${studentID}`, {
      headers: {
        Authorization: token,
      },
    });
  }

  getInstructorCourses(instructorID) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(`${API_URL}/instructor/${instructorID}`, {
      headers: {
        Authorization: token,
      },
    });
  }

  getCourseByTitle(title) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(`${API_URL}/findByTitle/${title}`, {
      headers: {
        Authorization: token,
      },
    });
  }

  enrollCourse(courseId) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      `${API_URL}/enroll/${courseId}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new CourseService();
