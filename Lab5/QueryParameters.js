export default function QueryParameters(app) {
    // Add console.log to debug route registration
    console.log("Registering query parameter routes");
  
    app.get("/lab5/calculator", (req, res) => {
      console.log("Calculator route hit with query:", req.query); // Debug log
      const { a, b, operation } = req.query;
      let result = 0;
      
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
          result = parseInt(a) * parseInt(b);
          break;
        case "divide":
          if (parseInt(b) === 0) {
            result = "Cannot divide by zero";
          } else {
            result = parseInt(a) / parseInt(b);
          }
          break;
        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    });
  }