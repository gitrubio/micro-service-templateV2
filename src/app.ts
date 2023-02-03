import express, { Application } from "express";
import { yellow, magenta, blue } from "colors";
import morgan from "morgan";
import db from "./database/connection";
import userRouter from './routes/user.route';
export default class App {
  private app: Application;
  private port: string | number;
  constructor() {
    this.app = express();
    this.port = 3000;
    this.midellwares();
    this.configdb();
    this.routes();
  }

  private configdb() {
    db.authenticate();
    db.sync().then(() => {
      console.log(blue("[DB] ") + yellow("conectado a la base de datos"));
    });
  }

  private midellwares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
  }

  private routes() {
    this.app.use('/api/user',userRouter)
  }


  listen() {
    this.app.listen(this.port);
    console.log(
      magenta("[ SERVER ]") +
        yellow(` [ servidor corriendo en puerto :: ${3000} ]`)
    );
  }
}
