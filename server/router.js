import express, { response } from "express";
import fetch from "node-fetch";

let key = "ec21538dedf1edd86dcec39eef5bb504";

let router = express.Router();
router.get("/:locationName", (req, res) => {
  const locationName = req.params.locationName;
  console.log(locationName);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=${key}`;
  let city;
  fetch(url)
    .then((r) => r.json())
    .then((d) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(d);
        city = d[0].city;
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
