import db from "../Database/index.js";

export const findAllEnrollments = () => {
  return db.enrollments;
};

export const createEnrollment = (enrollment) => {
  db.enrollments.push(enrollment);
  return enrollment;
};

export const deleteEnrollment = (userId, courseId) => {
  db.enrollments = db.enrollments.filter(
    (e) => e.user !== userId || e.course !== courseId
  );
  return { userId, courseId };
};

export const findEnrollmentsByUser = (userId) => {
  return db.enrollments.filter((e) => e.user === userId);
};

export const findEnrollmentsByCourse = (courseId) => {
  return db.enrollments.filter((e) => e.course === courseId);
};