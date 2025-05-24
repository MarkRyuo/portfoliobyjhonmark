// * This is server side or the backend code
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server");
} )

app.listen(5000, () => { 
  console.log("Server is started at http://localhost:5000");
} ) ;





