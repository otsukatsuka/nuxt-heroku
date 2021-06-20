import express from 'express'

export default class Sample {
  public sayHey = (req: express.Request, res: express.Response) => {
    res.send("Hey YO!")
  };
  public echo = (req: express.Request, res: express.Response) => {
    res.send(req.body.name)
  }
}

