const express = require("express");

const router = express.Router();

const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "empire state building",
    description: "One of the most famous sly scrappers in the world",
    location: { lat: 40.74884475, lng: -73.9871516 },
    address: "20 2 24 st",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw HttpError("Could not find place for the provided id",404);
  }
  res.json({ place }); // =>{place} =>{place:place}
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    return next(new HttpError("Could not find place for the provided user id",404));
  }

  res.json({ place });
});

module.exports = router;
