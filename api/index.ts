import express from 'express'
import samples from "./routes/samples";

const app: express.Express = express();


app.use(express.json());
app.use(express.urlencoded( {extended: true}));

// import APIs
app.use(samples);

app.get("/ping", (req: express.Request, res: express.Response) => {
  res.send("pong")
});

module.exports = {
  path: "api/",
  handler: app
};
