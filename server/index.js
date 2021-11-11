import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port= process.nextTick.PORT || 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("", (req, res) => {
    const date = new Date();
    res.json({ Stockholm: date.toTimeString() });
    res.send("Hello, my wether app is here!");
  });
  
