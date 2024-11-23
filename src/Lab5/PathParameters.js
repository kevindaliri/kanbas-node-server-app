export default function PathParameters(app) {
  // Add console.log to debug route registration
  console.log("Registering path parameter routes");

  app.get("/lab5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const result = parseInt(a) + parseInt(b);
    res.send(result.toString());
  });

  app.get("/lab5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const result = parseInt(a) - parseInt(b);
    res.send(result.toString());
  });

  app.get("/lab5/multiply/:a/:b", (req, res) => {
    console.log("Multiply route hit with params:", req.params); // Debug log
    const { a, b } = req.params;
    const result = parseInt(a) * parseInt(b);
    res.send(result.toString());
  });

  app.get("/lab5/divide/:a/:b", (req, res) => {
    console.log("Divide route hit with params:", req.params); // Debug log
    const { a, b } = req.params;
    if (parseInt(b) === 0) {
      res.send("Cannot divide by zero");
      return;
    }
    const result = parseInt(a) / parseInt(b);
    res.send(result.toString());
  });
}