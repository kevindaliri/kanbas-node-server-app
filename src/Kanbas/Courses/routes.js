import * as dao from "./dao.js";

function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.json(courses);
  });

  app.post("/api/courses", (req, res) => {
    const course = dao.createCourse(req.body);
    res.json(course);
  });

  app.delete("/api/courses/:courseId", (req, res) => {
    const status = dao.deleteCourse(req.params.courseId);
    res.json(status);
  });

  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const status = dao.updateCourse(courseId, req.body);
    res.json(status);
  });
}

export default CourseRoutes;