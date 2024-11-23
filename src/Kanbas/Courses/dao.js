import db from "../Database/index.js";

export const findAllCourses = () => {
  return db.courses;
};

export const createCourse = (course) => {
  db.courses.push(course);
  return course;
};

export const deleteCourse = (courseId) => {
  db.courses = db.courses.filter((c) => c._id !== courseId);
  return courseId;
};

export const updateCourse = (courseId, course) => {
  db.courses = db.courses.map((c) =>
    c._id === courseId ? { ...c, ...course } : c
  );
  return course;
};