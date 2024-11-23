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
    const { courseId } = req.params;
    dao.deleteCourse(courseId);
    res.sendStatus(204);
  });

  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const course = dao.updateCourse(courseId, req.body);
    res.json(course);
  });
}

export default CourseRoutes;