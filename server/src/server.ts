import app from "./app";
import { errors } from "celebrate";

app.use(errors());

app.listen(3333);
