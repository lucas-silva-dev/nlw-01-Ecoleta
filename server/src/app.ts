import express from "express";
import { Express } from "express";

import { errors } from "celebrate";
import { resolve } from "path";
import cors from "cors";

// import "./database";

import routes from "./routes";

class App {
  server: Express;
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // this.server.use(errors());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(resolve(__dirname, "..", "tmp", "static"))
    );
    this.server.use(
      "/uploads",
      express.static(resolve(__dirname, "..", "tmp", "uploads"))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
