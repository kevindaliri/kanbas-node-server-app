import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

function Lab5(app) {
  // Add the welcome route here
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5!");
  });

  // Keep your existing route handlers
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);
}

export default Lab5;