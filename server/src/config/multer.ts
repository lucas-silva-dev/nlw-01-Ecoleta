import multer from "multer";
import { resolve } from "path";
import crypto from "crypto";

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "tmp", "uploads"),
    filename(req, file, callback) {
      const hash = crypto.randomBytes(8).toString("hex");

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
