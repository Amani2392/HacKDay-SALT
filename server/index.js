import express from 'express';
import router from './router.js';
import cors from 'cors';
const app = express();
const port= process.env.PORT || 3000;

app.use(cors());
app.use("/forecasts", router);

app.get("*", (req, res) => {
    res.send("HEY, not valid endpoint!");
  });

  
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});