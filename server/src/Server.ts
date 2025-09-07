import express from "express"
import { Bootstrap } from "./Bootstrap"

const app = express()
const bootstrap = new Bootstrap(app)

bootstrap.addRouting();
bootstrap.addMiddleware();
bootstrap.startup(3000);
