// * This is server side or the backend code

const app = express();

app.get("/", (req, res) => { 
  res.send("Hello World!")
} )

app.listen(3000, () => { 
  console.log("Server is running on port 3000")
} ) ;