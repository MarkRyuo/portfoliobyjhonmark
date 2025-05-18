// * This is server side or the backend code

const app = express();

app.get("/", (req, res) => { 
  res.send("Hello World!")
} )