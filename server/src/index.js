import dotnev from "dotenv";

import { app } from "./app.js";
import { connectDb } from "./db/dbConfig.js";

dotnev.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("⚙️  Server is running on port: " + process.env.PORT);
    })
  })
  .catch((err) => {
    console.error("Mongo db connection error: ", err)
  })



