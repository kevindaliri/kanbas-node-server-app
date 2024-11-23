import Database from "../Database/index.js";

export function findAllCourses() {
  return Database.courses;
}

export function createCourse(course) {
  Database.courses.push(course);
  return course;
}

export function deleteCourse(courseId) {
  const { courses, enrollments } = Database;
  Database.courses = courses.filter((course) => course._id !== courseId);
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
  );
}

export function updateCourse(courseId, course) {
  Database.courses = Database.courses.map((c) =>
    c._id === courseId ? { ...c, ...course } : c
  );
  return course;
}